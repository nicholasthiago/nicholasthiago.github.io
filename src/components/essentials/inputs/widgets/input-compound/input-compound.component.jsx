import React from 'react';
import './input-compound.styles.scss';

import Input from 'components/essentials/inputs/input.component';


class InputComp extends React.Component {
	state = { label:[], list:[], data:[], opts:false };


	handle_OptsDisplay = () => {
		let { opts } = this.state;

		if (opts !== true) {
			return this.setState({ opts:true  });
		} else {
			return this.setState({ opts:false });
		};
	};

	handle_Select = (label,item) => {
		let { data } = this.state;

		for (var i=0; i < label.length; i++) {
			data[label[i]] = item[i];
		};

		this.setState({
			data,
			opts:false,
		});

		return this.props.onChange(data);
	};


	render_InputComp = (label,list) => {
		return (
			<div className={'input-compound'}>

				{ Object.entries(label).map( (e,i) => {
					return this.render_InputItem(e[1],i) })}

				{ this.render_Options(label,list) }
			</div>
		);
	};

	render_InputItem = (label,i,value=this.state.data) => {

		return (
			<div className={'input-compound-item'} key={i}
				onMouseDown={ () => this.handle_OptsDisplay() }
			>
				<label> {label} </label>
				<Input type={'text'} readOnly={true} value={value[label[i]]} />
			</div>
		);
	};

	render_Options = (label,list,style) => {
		let { opts } = this.state;

		if (opts) {
			let el = document.querySelector('div.input-compound').getBoundingClientRect();

			style = {
				top 	  : (el.y) 		,
				width 	  : (el.width)	,
				marginTop : (el.height) - 16 ,
			};

			return (
				<div className={'input-compound-opts'} style={style}>
					{(list).map( (item,i) => {
						return (
							<span key={i}
								onMouseDown={() => this.handle_Select(label,list[i])}
							>
								{`${item[0]} - ${item[1]}`}
							</span>
						)
					})}
				</div>
			);

		} else { return null };
	};

	render () {
		let props = {
			label : [ 'CODPROD','PRODUTO' ],
			list  : [
				[ 19, 'DETERGENTE'			],
				[ 27, 'AGUA SANITARIA'		],
				[ 32, 'MULTIUSO LIMPA TUDO'	],
			],
		};

		//	props : [ data, list, label ];
		return 	this.render_InputComp(
					props.label,
					props.list,
					props.data,
				);
	};
};

export default ( InputComp );