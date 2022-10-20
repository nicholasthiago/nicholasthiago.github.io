import React from 'react';
import './input-simple.styles.scss';

import Input from 'components/essentials/inputs/input.component';
import Switch from 'components/essentials/switch/switch.component';


class InputSimp extends React.Component {
	state = { data:[] };

	handle_onChange = (data) => {
		console.log( data );
		return this.setState({ data });
	};

	handle_InputSelector = (type) => {
		switch(type) {

			case 'switch':
				return <Switch onChange={e => this.handle_onChange(e)} />

			case 'textarea':
				return <textarea />

			default:
				return <Input type={type} onInput={e => this.handle_onChange(e)} />
		};
	};

	render_InputSimp() {
		return (
			<div className={`input-simple input-${this.props.type}`}>
				{ this.handle_InputSelector(this.props.type) }
			</div>
		);
	};

	render () {
		//	props : [ type, holder, onChange ];
		return this.render_InputSimp();
	};
};

export default ( InputSimp );