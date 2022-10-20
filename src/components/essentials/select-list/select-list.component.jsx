import React from 'react';
import './select-list.styles.scss';

// Component Imports
import CheckBox from './components/check-box/check-box.component.jsx';


class SelectList extends React.Component {
	state = {
		ref		: []	 ,
		data	: []	 ,
		count	:  0	 ,
		display	: 'flex' ,
	};

	handle_displayList = () => {
		(this.state.display !== 'none')
		? ( this.setState({ display: 'none' }) )
		: ( this.setState({ display: 'flex' }) )
	};

	handle_checkBox = ( data,index,value,newData,newRef ) => {
		value 	= this.state.count	;
		newRef 	= this.state.ref	;
		newData = this.state.data	;

		if (data.checked === true) {

			newData[ (data.labels[0]) ] = data.labels;
			newRef.opts[index][2] = true;
			( value = (value + 1) )

		} else {
			delete newData[ (data.labels[0]) ];
			newRef.opts[index][2] = false;
			( value = (value - 1) )
		};

		this.setState({ data  : newData });
		this.setState({ ref	  : newRef 	});
		this.setState({ count : value 	});

		return this.props.onChange(this.state.data);
	};


	render_SelectList = ref => {
		console.log(ref);
		try {
		return (
			<div className={'select-type'}>

				<label> { ref.name	} </label>

				<div className={'select-items-list'}
					style={{ display:this.state.display }}>

					{ (ref).map( (item,index) => {

						var labels = [ (item[0]) ];

						return (
							<CheckBox labels={labels}
								onChange={data => this.handle_checkBox(data,index)}
								disable={ (this.state.count >= ref.max) ? true : false }
							/>
						);
					})}
				</div>

			</div>	);

		} catch {
			return <div className={'select-list-loading'}> Loading... </div>
		}
	};


	async componentDidMount (list,src) {
		console.log(this.props.src)
		await this.setState({
			ref: this.props.src,
		})
	};

	render () {
		return (
			<div className={'select-list-component'}>
				{ this.render_SelectList(this.props.src) }
			</div>
		);
	};
};


export default ( SelectList );