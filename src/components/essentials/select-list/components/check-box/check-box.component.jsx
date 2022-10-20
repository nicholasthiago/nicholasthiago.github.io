import React from 'react';
import './check-box.styles.scss';

class CheckBox extends React.Component {
	state = {
		checked		: false	,
		checkClass	: ''	,
	};


	async handle_Click(state = this.state.checked) {
		
		if (state !== true) {
			if (!this.props.disable) {

				await this.setState({ checked: true  , checkClass: 'checked' });

			} else { return null };

		} else {
			await this.setState({ checked: false , checkClass: '' });
		};


		let checkData = {
			checked : this.state.checked ,
			labels  : this.props.labels	 ,
		};

		return this.props.onChange(checkData);
	};


	render_CheckBox = (labels) => {
		return (
			<span className={`checkbox-component ${this.state.checkClass}`}
				onMouseDown={() => this.handle_Click()}
				style={{
					opacity:(this.props.disable)
					? (0.4) : (1.0)
				}}
			>

				{ (labels).map( (label='',i) =>
					(label !== '')
					? ( <h3 key={i}> {label} </h3> ) : null
				)}

				<button className={'checkbox'}></button>
			</span>
		)
	};


	render () {
		// props = [ labels , onChange , disable ]
		return this.render_CheckBox(this.props.labels);
	};
};


export default ( CheckBox );