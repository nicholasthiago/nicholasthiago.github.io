import React from 'react';
import './switch.styles.scss';


class Switch extends React.Component {
	state = { value:'' };

	async handle_Switch () {
		let { value } = this.state;

		if (value !== true) {
			await this.setState({ value:true  });
		} else {
			await this.setState({ value:false });
		};

		// this.props.onChange(this.state.value);
		return (this.state.value);
	};

	render_Switch = (value) => {

		return (
			<div className={`input-switch ${this.props.className}`}
				onMouseDown={() => this.handle_Switch()}
			>
				<button className={(value) ? 'switch-on' : 'switch-off'}
				></button>
			</div>
		);
	};

	componentDidMount () {
		if (this.props.value) {
			return this.setState({ value:this.props.value })
		} else return null
	};

	render () {
		return this.render_Switch(this.state.value);
	};
};


export default ( Switch );