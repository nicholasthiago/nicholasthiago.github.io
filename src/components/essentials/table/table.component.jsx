import React from 'react';
import './table.styles.scss';

//	Redux Imports
import { connect } from 'react-redux';
import {
	FilterData,
	SelectData,
} from 'redux/data-manager/data-manager.actions';


//	Component Imports
import Input from 'components/essentials/inputs/input.component';
import LoadingTxt from 'components/essentials/loading/loading.component';

//	Table Components Import
import TBody from './components/table-body/table-body.component';
import THead from './components/table-head/table-head.component';
import TOptions from './components/table-options/table-options.component';
import TPagination from './components/table-pagination/table-pagination.component';


class Table extends React.Component {
	child = React.createRef();

	state = {
		data:		[],
		filter:		[],
		checked:	[],
		selected:	[],

		loaded: false,
		context: false,
		optMenu: [],

		page: 1,
		show: this.props.show,
		pagination: [...Array(this.props.show).keys()],
	};


	// --- Handle Functions --- //

		handle_CheckboxAll = (index,pos,item,call) => {
			let { checked,filter } = this.state;

			call = document.querySelector(`.${this.props.className} span.table-checkbox-all`);

			if (checked.length !== Object.keys(filter).length) {
				checked = [...Array(Object.keys(filter).length).keys()]
				call.style.backgroundColor = '#7C4DFF';

			} else {
				checked = [];
				call.style.backgroundColor = '#FFFFFF';
			};

			// console.log(checked,Object.keys(filter).length);
			this.setState({ checked });

			//	Checkbox Status Handler
			try {
				for (index = 0; index < Object.keys(filter).length; index++) {

					pos = checked.indexOf(index);
					item = document.querySelector(`span.cbox-${index}`);

					if (pos > -1) {
						item.style.backgroundColor = '#7C4DFF';
					} else {
						item.style.backgroundColor = '#FFFFFF';
					}
				};

			} catch { return null }
		};

		handle_CheckBox = (index,checked,pos,item) => {

			checked = this.state.checked;
			pos = checked.indexOf(index);
			
			if (pos > -1) {
				checked.splice(pos, 1);
			} else {
				checked.push(index);
			};

			this.setState({ checked });
			// console.log(this.state.checked);

			//	Checkbox Status Handler
			try {
				pos = checked.indexOf(index);
				item = document.querySelector(`span.cbox-${index}`);

				if (pos > -1) {
					item.style.backgroundColor = '#7C4DFF';
				} else {
					item.style.backgroundColor = '#FFFFFF';
				}

			} catch { return null }
		};

		handle_Print = (response) => {

			let { checked,filter } = this.state;
	
			Object.entries(filter).map( (e,i) => {
	
				if (checked.length < 1) {
					return response = {
						...response,
						[e[0]]: e[1],
					};

				} else {
	
					if ( (checked).indexOf(i) > -1 ) {
						return response = {
							...response,
							[e[0]]: e[1],
						};
					} else return null;
				};
			})

			console.log(response);
			return ( response );
		};

		async handle_Search (input,filter=[]) {
			let { data } = this.state;
	
			Object.entries(data).filter( (item) => {
				return Object.values(item[1]).map( (val,i) => {
					if ( ( (val.toString()).toLowerCase()).indexOf(input.toLowerCase()) > -1 ) {
						return filter = {
							...filter,
							[item[0]]: item[1],
						};
					} else return null;
				})
			});

			//	console.log(data,filter)
			await this.setState({ filter });
			await this.refs.pagination.handle_Reset();

			// await this.props.FilterData(filter);
			return filter;
		};

		async handle_Pagination (list) {
			await this.setState({ pagination:list });
		};

		async handle_ItemSelect (item,index,row,list) {
			list = document.querySelectorAll(`tr`);
			row = document.querySelector(`tr.row-${index}`);

			for (var i = 0; i < list.length; i++) {
				list[i].classList.remove('selected-row');
			};

			row.classList.toggle('selected-row');

			// console.log(this.state.selected);
			await this.props.SelectData(item);
			await this.setState({ selected:item });
		};

		async handle_OptionsDisplay (data,e,menu,pos) {
			e.persist();

			await this.setState({ context:true });

			if (e) {
				e.preventDefault();

				menu = {
					left:	`${e.clientX}px` ,
					top:	`${e.clientY}px` ,
				};
			};

			await this.setState({ optMenu:menu });
		};

		handle_Options = (type,data) => {
			switch(type) {

				case 'new':
					this.props.SelectData( [] );
					this.setState({ selected:[] });
					return this.props.onNew( [] ) ;

				case 'edit':
					return this.props.onEdit( this.state.selected );

				case 'delete':
					return this.props.onDelete( this.state.selected );

				default:
					return this.handle_Hold( type,data );
			};
		};

		handle_Hold = (log1,log2) => {
			console.log(log1,log2);
		};

	// ------------------------ //


	render_Table = (data,filter) => {

		let head   	 = (this.props.head) 	 ? (this.props.head) : (data)
		let strips 	 = (this.props.strips) 	 ? 'strips' : null
		let border 	 = (this.props.border) 	 ? 'border' : null
		let checkbox = (this.props.checkbox) ? true : false

		let { selected,context,optMenu,pagination } = this.state;

		return (
			<div className={`table-component-wrapper ${this.props.className}`}>

				<div className={'table-title'}>
					<h1> { this.props.title } </h1>
				</div>

				<div className={'table-options'}>

					{	(this.props.searchable)
						? ( <Input type={'search'}
							placeholder={'pesquisar'}
							onInput={(e) => this.handle_Search(e)}
							className={'table-search'} />
						) : ( null )
					}

					<div className={'table-buttons'}>

						{	(this.props.detailPage)
								? ( <TOptions
										disable={(selected.length < 1) ? false : true }
										onNew={() => this.handle_Options( 'new',[] )}
										onView={() => this.handle_Options('view: ',selected)}
										onEdit={() => this.handle_Options('edit',this.state.selected)}
										onDelete={() => this.handle_Options('delete',selected)}
									/>
								) : ( null )
						}

						{	(this.props.addable)
							? ( <button className={'table-button-new'}
									onMouseDown={() => this.handle_Options('new',[])}>
									{ 'Adicionar' }
								</button>
							) : ( null )
						}

						{	(this.props.printable)
							? ( <button className={'table-button-print'}
									onMouseDown={() => this.handle_Print()}>
									{(this.state.checked.length < 1)
										? ('Imprimir Página'		)
										: ('Imprimir Selecionados'	) }
								</button>
							) : ( null )
						}
					</div>
				</div>

				<div className={`table-wrapper`}>
					<table className={`${strips} ${border}`}>
						<THead
							data={head}
							head={this.props.head.allFields}
							checkbox={checkbox}
							onCheckAll={() => this.handle_CheckboxAll()} />
						<TBody
							data={filter}
							head={this.props.head.allFields}
							checkbox={checkbox}
							pagination={pagination}
							onCheck={ index => this.handle_CheckBox(index)}
							onOptions={(data,e) => this.handle_OptionsDisplay(data,e)}
							onItemSelect={(data,index) => this.handle_ItemSelect(data,index)} />
					</table>
				</div>

				<TPagination
					ref={'pagination'}
					page={this.state.page}
					show={this.props.show}
					data={this.state.filter}
					onChange={ list => this.handle_Pagination(list) }
				/>

				<div className={`table-options-menu ${(context) ? ('active') : ''}`}
					style={ (context) ? (optMenu) : (null) }>
					<h3 onMouseDown={() => this.handle_Options('new')}>
						{'Novo'} </h3>

					<h3 onMouseDown={() => this.handle_Options('view: ',selected)}>
						{'Ver'} </h3>

					<h3 onMouseDown={() => this.handle_Options('edit',this.state.selected)}>
						{'Editar'} </h3>

					<h3 onMouseDown={() => this.handle_Options('delete',selected)}>
						{'Excluir'} </h3>
				</div>

			</div>
		);
	};


	async componentDidMount (show,pagination) {
		let self = this;
		let { src } = this.props;
		show = (this.props.show) ? (this.props.show) : (this.state.show);
		pagination = [...Array(this.props.show).keys()];

		document.addEventListener('click', function(event){
			event.preventDefault();
			self.setState({ context:false });
		});

		this.setState({

			data: src,
			filter: src,
			length: (Object.keys(src).length),
			
			page: 1,
			show: show,
			pagination: pagination,

			loaded: true,
		});
	};

	render () {

		/*	Table.props = {
				className,
				src			: source for table data				,
				head		: source for table header			,
				border		: table with borders				,
				show		: number of items on a page			,
				strips		: rows with alternate background	,
				checkbox	: table with checkbox for rows		,
				printable	: button to print table data		,
				searchable	: search through table data			,
			};
		*/

		let { data,filter,loaded } = this.state;

		if (loaded === true) {

			//console.log('table.data: ',data);
			return this.render_Table(data,filter);

		} else return ( <LoadingTxt/> );
	};
};


const mapDispatchToProps = dispatch => ({
	FilterData : data => dispatch(FilterData(data)),
	SelectData : data => dispatch(SelectData(data)),
});

export default connect(
	null,
	mapDispatchToProps,
)( Table );