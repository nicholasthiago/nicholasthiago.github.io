import React from 'react';
import './button.styles.scss';

class Button extends React.Component {
	state = { class: '' };

	handle_Click = () => {
		this.props.onMouseDown();
	};

	render () {
		return (
			<button
				onMouseDown={() => this.handle_Click()}
				className={`${(this.props.className) ? (this.props.className) : ''} ${(this.props.active === true) ? ' selected' : ''}`}
			>
				{this.props.children}
			</button>
		);
	};
};

export default ( Button );