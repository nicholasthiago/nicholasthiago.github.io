import React from 'react';
import './model.styles.scss';

import { connect } from 'react-redux';

import * as af from 'app/functions/app.functions';							// eslint-disable-line

import SVG from 'components/essentials/svg/svg.component'; 					// eslint-disable-line
import Div from 'components/essentials/div/div.component';					// eslint-disable-line
import Image from 'components/essentials/images/image.component';			// eslint-disable-line
import Button from 'components/essentials/buttons/button.component';		// eslint-disable-line
import LoadingScreen from 'components/essentials/loading/loading.component';	// eslint-disable-line


class Model extends React.Component {
	state = { data:[], loaded:false };

	render_Model = () => {
		return (
			<section className={'component-class'}>
				{'component'}
			</section>
		);
	};

	async componentDidMount () {
		await this.setState({
			data	: this.props.data,
			loaded	: true,
		});
	};

	render () {
		let { data,loaded } = this.state;

		if (loaded) {

			return this.render_Model(data);

		} else { return <LoadingScreen /> };
	};
};


const mapStateToProps = state => ({
	data: state.DataManager.data_get,
});

export default connect(
	mapStateToProps,
)( Model );