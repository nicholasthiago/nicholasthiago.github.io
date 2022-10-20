import React from 'react';
import './form.styles.scss';

//	Component Imports
import Input from 'components/essentials/inputs/input.component';


class Form extends React.Component {
	state = { data:[] };

	render_InputSelector = (data,index) => {
		switch(true) {

			default:
				return <Input type={'text'} placeholder={'digite'} />
		};
	};

	render_Form = (type,src) => {
		return (
			<div className={'form-wrapper'}>
				<h1> {'Form Title'} </h1>

				{	Object.entries(src).map( (e,i) => {
						return this.render_InputSelector(e,i);
					})
				}
			</div>
		);
	};

	render () {
		const { type,src } = this.props;

		return this.render_Form(type,src);
	};
};


export default ( Form );