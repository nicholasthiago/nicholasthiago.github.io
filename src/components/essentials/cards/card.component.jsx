import React from 'react';
import './card.styles.scss';

import { connect } from 'react-redux';

import SVG from 'components/essentials/svg/svg.component';
import Div from 'components/essentials/div/div.component';
import Button from 'components/essentials/buttons/button.component';
import AlertMsg from 'components/essentials/alerts/alert-msg/alert-msg.component';


class CardApp extends React.Component {
	state = { alert:'none'};

	handle_OptionClick = (type,app) => {
		switch(type) {
			case 'access':
				return console.log(`Acessando... ${app.title}`);
				//return window.location = `${window.location.origin}/apps`;

			case 'change':
				return console.log(`Alterando planos de... ${app.title}`);
				//return window.location = `${window.location.origin}/apps`;

			case 'cancel':
				return this.setState({ alert:'flex'});

			default: return console.log(`access`);
		};
	};

	handle_AlertClick = (type,app) => {
		switch(type) {
			case 'accept':
				console.log(`Cancelando assinatura de ${app.title}`);
				return this.setState({ alert:'none'});

			case 'cancel':
				return this.setState({ alert:'none'});

			default: return console.log(`cancel`);
		};
	};

	render_CardApp = (app) => {
		return (
			<Div className={'card-wrapper'}>

				<Div className={'card-details'} flow={'row'}>

					<Div className={'card-info'}>
						<h2> {app.title} </h2>
						<h3> {app.desct} </h3>
					</Div>

					<SVG icon={app.icon} />
				</Div>

				<Div className={'card-options'} flow={'row'}>
					<Button onMouseDown={() => this.handle_OptionClick('access',app)}>
						{'Acessar'} </Button>

					<Button onMouseDown={() => this.handle_OptionClick('change',app)}>
						{'Obter/Alterar'} </Button>

					<Button onMouseDown={() => this.handle_OptionClick('cancel',app)}>
						{'Desativar'} </Button>
				</Div>

				<AlertMsg display={this.state.alert}
					msg={`Deseja cancelar a assinatura da aplicação ${app.title}?`}
					msgAccept={'Confirmar'}
					msgCancel={'Cancelar'}
					onAccept={() => this.handle_AlertClick('accept',app)}
					onCancel={() => this.handle_AlertClick('cancel')}
				/>

			</Div>
		);
	};

	render () {
		return this.render_CardApp(this.props.app);
	};
};

export default connect()( CardApp );