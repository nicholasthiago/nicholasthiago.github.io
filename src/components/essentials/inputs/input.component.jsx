import  React from 'react';
import './input.styles.scss';

/*	Input Options List	//
	'button'			,
	'checkbox'			,
	'cnpj-cpf			,
	'color'				,
	'date'				,
	'datetime-local'	,
	'email'				,
	'file'				,
	'hidden'			,
	'image'				,
	'month'				,
	'number'			,
	'password'			,
	'radio'				,
	'range'				,
	'reset'				,
	'search'			,
	'select'			,
	'submit'			,
	'tel'				,
	'text'				,
	'time'				,
	'url'				,
	'week'				,
// -------------------- */

import Switch from 'components/essentials/switch/switch.component'
import SelectList from 'components/essentials/select-list/select-list.component';


class Input extends React.Component {
	state = { output: [] };

	async handle_Data (label,data,index,output) {

		output = data;

		await this.setState({ output });
		console.log(this.state.output);
		this.props.onInput(data);
	};

	render_Inputs = (type,options,label) => {
		options = (this.props.opts);

		let clName = (this.props.className) || ('')

		if ( type === 'switch') {
			return (
				<div className={`input-wrapper ${type} ${clName}-wrapper`}>
					<Switch value={this.props.value} />
				</div>
			);

		} else if (type === 'cnpj-cpf') {
			return (
				<div className={`input-wrapper ${type} ${clName}-wrapper`}>
					<label> {label} </label>

					<input {...this.props}
						type={type}
						disabled={this.props.disabled}
						className={clName}
						placeholder={this.props.placeholder}
						onInput={(e) => this.props.onInput(e.target.value)}
					/>
				</div>
			);

		} else if ( type === 'textarea') {
			return (
				<div className={`input-wrapper ${type} ${clName}-wrapper`}>
					<label> {label} </label>

					<textarea {...this.props}
						type={type}
						disabled={this.props.disabled}
						className={clName}
						placeholder={this.props.placeholder}
						onInput={(e) => this.props.onInput(e.target.value)}
					/>
				</div>
			);

		} else if ( this.props.opts ) {
			return (
				<div className={`input-wrapper ${type} `}>
					<SelectList src={this.props.opts} onChange={e => console.log(e)} />
				</div>
			);

		} else {
			return (
				<div className={`input-wrapper ${type} ${clName}-wrapper`}>
					<label> {label} </label>
					
					<input {...this.props}
						type={type}
						disabled={this.props.disabled}
						className={clName}
						placeholder={this.props.placeholder}
						onInput={(e) => this.props.onInput(e.target.value)}
					/>
				</div>
			);
		};
	};

	componentDidMount () {};

	render () {
		let type = (this.props.type) || ('');

		//	props : [ (input.props), className, type, options ];
		return this.render_Inputs(type,this.props.opts,this.props.label);
	};
};


export default ( Input );