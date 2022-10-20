import React from 'react';
import './alert-msg.styles.scss';

// import SVG from 'components/essentials/svg/svg.component';
import Div from 'components/essentials/div/div.component';
import Button from 'components/essentials/buttons/button.component';


class AlertMsg extends React.Component {
	state = {};

	render_AlertMsg = () => {
		let alertClass = (this.props.className) ? (this.props.className) : ('')

		return (
			<div className={'alert-msg-wrapper'} style={{ display:this.props.display }}>
				<Div className={`alert-msg-component ${alertClass}`}>

					<h2> {'Aviso'} </h2>

					<h3> {this.props.msg} </h3>

					<Div className={'alert-control'} flow={'row'}>

						<Button onMouseDown={ () => this.props.onAccept() }>
						{	(this.props.msgAccept)
							? (this.props.msgAccept)
							: ('Confirmar')
						}
						</Button>

						<Button onMouseDown={ () => this.props.onCancel() }>
						{	(this.props.msgCancel)
							? (this.props.msgCancel)
							: ('Cancelar')
						}
						</Button>
					</Div>

				</Div>
			</div>
		);
	};

	render () {
		return this.render_AlertMsg();
	};
};

export default ( AlertMsg );