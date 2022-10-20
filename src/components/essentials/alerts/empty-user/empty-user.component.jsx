import React from 'react';
import './empty-user.styles.scss';

//	Component / Reference Imports
import * as tool from 'utils/tools-crypto/multi-tools';

import Button from 'components/essentials/buttons/button.component';


export class EmptyUser extends React.Component {
	state = {};

	handle_Redirect = (type) => {

		if (type !== 'reg') {
			return window.location.reload;

		} else {
			return window.location.href = tool.getUrlRedirect();
		};
	};


	render_EmptyUser = () => {

		return 	<div className={'empty-user-alert'}
					style={{ display:this.props.display }}>
					
					<h2> {'Ops, você ainda não está logado'} </h2>

					<Button onMouseDown={() => this.handle_Redirect('log')}>
					{'Entrar'} </Button>

					<h3> {'Ainda não tem uma conta?'} </h3>

					<Button onMouseDown={() => this.handle_Redirect('reg')}>
					{'Cadastrar'} </Button>

				</div>
	};

	render () {
		return this.render_EmptyUser();
	};
};