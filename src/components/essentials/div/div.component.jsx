import React from 'react';
import './div.styles.scss';

class Div extends React.Component {
	state = {};

	render_Div = () => {
		let divFlow,divClass;
		divClass = (this.props.className) || ('');

		switch(this.props.flow) {
			case 'row': divFlow = 'div-row'; break;
			case 'col': divFlow = 'div-col'; break;

			default: 	divFlow = 'div-col'; break;
		};

		return (
			<div className={`${divClass} ${divFlow} div-component`}
				onMouseDown={this.props.onMouseDown}
			>
				{this.props.children}
			</div>
		);
	};

	render () {
		return this.render_Div();
	};
};

export default ( Div );