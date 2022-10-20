import {
	useRef		,
	useState	,
	useEffect	,
	useCallback	,
} from 'react'


//	useToggle => toggle boolean values:
//	const [ value, toggleValue ] = useToggle( false )
export function useToggle( defaultValue ) {

	const [ value, setValue ] = useState( defaultValue )

	function toggleValue( value ) {
		setValue( currentValue =>
			( typeof value === 'boolean' )
			? value : !currentValue
		)
	};

	return [ value, toggleValue ];
};


//	useTimeout => sets Timeout limits to callbacks
//	const { clear, reset } = useTimeout(() => setCount(0), 1000 )
export function useTimeout( callback, delay ) {
	const callbackRef	= useRef( callback )
	const timeoutRef	= useRef()

	useEffect( () => {
		callbackRef.current = callback
	}, [ callback ]);

	const set = useCallback( () => {
		timeoutRef.current = setTimeout(() =>
			callbackRef.current(), delay
		)
	}, [ delay ]);

	const clear = useCallback( () => {
		timeoutRef.current && clearTimeout( timeoutRef.current )
	}, []);

	useEffect( () => {
		set()
		return clear;
	}, [ delay, set, clear ]);

	const reset = useCallback( () => {
		clear()
		set()
	}, [ clear, set ]);

	return { reset, clear };
};


//	useDelay => triggers callback after delay
//	useDelay( () => printCount(), 1000, count )
export function useDelay( callback, delay, deps ) {
	const { clear, reset } = useTimeout( callback, delay )

	useEffect( reset, [...deps, reset ] )
	useEffect( clear, [] ) // eslint-disable-line
};


//	useUpdate => triggers callback action when something changes
//	useUpdate( () => doSomething() )
export function useUpdate( callback, deps ) {
	const firstRenderRef = useRef( true );

	useEffect( () => {
		if ( firstRenderRef.current ) {
			firstRenderRef.current = false
			return
		}
		return callback()
	}, deps ); // eslint-disable-line
};


//	useArray => handle array with many ready to use functions
//	const { array, set, push, remove, filter, update, clear } = useArray( arrayData )
export function useArray( defaultValue ) {
	const [ array, setArray ] = useState( defaultValue )

	function clear() { setArray( [] ) }

	function push( element ) { setArray( a => [ ...a, element ] )}

	function filter( callback ) { setArray( a => a.filter( callback ) )}

	function update( index, newElement ) {
		setArray( a => [
			...a.slice( 0, index ),
			newElement,
			...a.slice( index + 1, a.length - 1 )
		])
	}

	function remove( index ) {
		setArray( a => [
			...a.slice( 0, index ),
			...a.slice( index + 1, a.length - 1 )
		])
	}

	return { array, set: setArray, push, filter, update, remove, clear };
};


//	usePrevious => store previous state value
//	const prevState = usePrevious( state )
export function usePrevious( value ) {
	const currentRef  = useRef( value )
	const previousRef = useRef()

	if ( currentRef.current !== value ) {
		previousRef.current = currentRef.current
		currentRef.current = value
	}

	return previousRef.current
};


//	useStateHistory => get history control of some State
//	const [ count, setCount, { history, pointer, prev, next, go }] = useStateHistory( initCount )
export function useStateHistory(
	defaultValue,
	{ capacity = 12 } = {}
) {
	const [ value, setValue ] = useState( defaultValue )
	const historyRef = useRef([ value ])
	const pointerRef = useRef( 0 )

	const set = useCallback(
		v => {
			const resolvedValue = typeof v === 'function' ? v( value ) : v

			if ( historyRef.current[ pointerRef.current ] !== resolvedValue ) {
				if ( pointerRef.current < historyRef.current.length - 1 ) {
					historyRef.current.splice( pointerRef.current + 1 )
				}
				historyRef.current.push( resolvedValue )

				while ( historyRef.current.length > capacity ) {
					historyRef.current.shift()
				}
				pointerRef.current = historyRef.current.length - 1
			}
			setValue( resolvedValue )
		},
		[ capacity, value ]
	)

	const prev = useCallback( () => {
		if ( pointerRef.current <= 0 ) return
		pointerRef.current--

		setValue( historyRef.current[ pointerRef.current ] )
	}, [])

	const next = useCallback( () => {
		if ( pointerRef.current >= historyRef.current.length - 1 ) return
		pointerRef.current++

		setValue( historyRef.current[ pointerRef.current ] )
	}, [])

	const go = useCallback( index => {
		if ( index < 0 || index >= historyRef.current.length - 1 ) return
		pointerRef.current = index

		setValue( historyRef.current[ pointerRef.current ] )
	}, [])

	return [
		value, set,
		{
			history: historyRef.current,
			pointer: pointerRef.current,
			prev, next, go
		}
	];
};


//	useStorage => save items / functions on local/session Storages
//	const [ value, setValue, delValue ] = useStorage('key','value','local')
export function useStorage( key, defaultValue, storageObject ) {
	const storage = storageObject === 'local' ? ( window.localStorage ) : ( window.sessionStorage )

	const [ value, setValue ] = useState( () => {
		const jsonValue = storage.getItem( key )

		if ( jsonValue != null ) return JSON.parse( jsonValue )

		( typeof initialValue === 'function' ) ? defaultValue() : defaultValue
	})

	useEffect( () => {
		if ( value === undefined ) return storage.removeItem( key )

		storage.setItem( key, JSON.stringify( value ))
	}, [ key, value, storage ])

	const delValue = useCallback( () => setValue( undefined), [] )

	return [ value, setValue, delValue ];
};


//	useAsync => hook for async functions / requests
//	const { loading, error, value } = useAsync( () => {
//		return new Promise(( resolve, reject ) => {} )
//	})
export function useAsync( callback, deps=[] ) {
	const [ loading	, setLoading ] = useState( true )
	const [ error	, setError	 ] = useState()
	const [ value	, setValue	 ] = useState()

	const callbackMemoized = useCallback( () => {

		setLoading( true )
		setError( undefined )
		setValue( undefined )

		callback()
			.then(  setValue )
			.catch( setError )
			.finally( () => setLoading( false ))
	}, deps ) // eslint-disable-line

	useEffect( () => callbackMemoized(), [ callbackMemoized ])

	return [ loading, error, value ];
};


//	useFetch => fetch request hook
//	const { loading, error, value } = useFetch( url, {}, [ deps ])
export function useFetch( url, options = {}, deps = [] ) {
	const fetchOptions = {
		headers: { "Content-Type": "application/json" },
		...options
	};

	return useAsync( () => {
		return fetch( url, fetchOptions ).then( res => {
			if ( res.ok ) return res.json()

			return res.json().then( json => Promise.reject( json ))
		})
	}, deps )
};


//	useMasked => apply mask formatting to String data
//	const [ value, maskedValue, setValue ] = useMasked([ '900.00','R$ ####.## ])
export function useMasked( defaultValue, pattern ) {
	const valueRef = useRef( defaultValue )
	const [ value, setValue ] = useState( defaultValue.toString() )

	useEffect(() => {
		setValue( value.replace( pattern, '$&,'));
	}, [ defaultValue ]) // eslint-disable-line

	return [ valueRef.current, value, setValue ];
};


//	useEventListener => add eventListener to target, with function defined
//	useEventListener( 'mousedown', event => console.log( event ), window.document.element )
export function useListener(
	eventType	= ''			,
	target		= window		,
	listener	= () => null	,
	options		= null			,
) {
	const savedListener = useRef();

	useEffect( () => savedListener.current = listener, [ listener ])

	useEffect( () => {

		if ( !target?.addEventListener ) return;

		const eventListener = event => savedListener.current( event );

		target.addEventListener( eventType, eventListener, options );

		return () => 
			target.removeEventListener( eventType, eventListener, options );
	}, [ eventType, target, options ]);
};


//	useObject =>
//	usage...
//	export function useObject( defaultValue ) {};