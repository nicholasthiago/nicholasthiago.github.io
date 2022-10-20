import React from 'react';
import './loading.styles.scss';

class LoadingScreen extends React.Component {
	state = {};

	render_Cube = () => {
		return (
			<div className={'loading-wrapper'}>
				<div className={'square'}></div>
				<div className={'square'}></div>
				<div className={'square'}></div>
				<div className={'square'}></div>
				<div className={'square'}></div>
				<div className={'square'}></div>
			</div>
		);
	};

	render_CircleRace () {
		return (
			<div id="preloader">
				<div id="loader"></div>
			</div>
		);
	};

	render_Loading = (type) => {
		switch (type) {

			case 'cube':
				return this.render_Cube();

			case 'circle-race':
				return this.render_CircleRace();

			default:
				return this.render_Cube();
		};
	};

	render () {
		return this.render_Loading(this.props.type);
	};
};


export default ( LoadingScreen );