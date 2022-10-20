import React from 'react';
import './carousel.styles.scss';

import { connect } from 'react-redux';

import SVG from 'components/essentials/svg/svg.component'; 					// eslint-disable-line
import Div from 'components/essentials/div/div.component';					// eslint-disable-line
import Image from 'components/essentials/images/image.component';			// eslint-disable-line
import Button from 'components/essentials/buttons/button.component';		// eslint-disable-line
import LoadingTxt from 'components/essentials/loading/loading.component';	// eslint-disable-line


class Carousel extends React.Component {
	state = { data:[], now:0 };

	handle_Control = (type,n) => {

		let { now,max } = this.state;

		switch(type) {

			case 'prev':
				if (now - 1 < 0) { n = (max - 1);
					return this.setState({ now:n });

				} else { n = (now - 1);
					return this.setState({ now:n });
				};

			case 'next':
				if (now + 1 >= max) {
					n = (0);
					return this.setState({ now:n });

				} else {
					n = (now + 1);
					return this.setState({ now:n });
				};

			default:
				return this.setState({ now });
		};
	};

	render_Control = (list,i=0) => {

		return Object.keys(list).map( (key,i) => {
			let c = (this.state.now.toString() === key.toString()) ? ('control-current') : ('');

			return (
				<Button key={i}
					className={`${c} control-${key}`}
					onMouseDown={() => this.setState({ now:key })}
				/>
			);
		});
	};

	render_Carousel = (list,imgUrl) => {

		let dt,dw = window.innerWidth;
		let sw = (dw < 1640) ? (100) : (80);

		switch (true) {
			case ( dw < 430 ): 	dt = 'mobile'	; break	;
			case ( dw < 780 ): 	dt = 'tablet'	; break	;
			default:			dt = 'desktop'	; break	;
		};

		let max = this.state.max;
		let w = `${max * sw}vw`;
		let t = `translateX(-${this.state.now * sw}vw)`;
		let cn = (this.props.className) || ('');

		let style = {
			transform	: t,
			width		: w,
		};

		return (
			<div className={`${cn} carousel-wrapper carousel-${dt}`}>
				<div className={'carousel-content'} style={style}>
					{	(list).map( (img,i) => {
							imgUrl = (img).replace('device-type',dt);
							return (
								<Image src={require(`../../../${imgUrl}`)} alt={`carousel-img${i}`} key={i} />
							);
						})
					}
				</div>

				<Div className={'carousel-buttons'} flow={'row'}>
					<Button className={'control-prev'}
						onMouseDown={() => this.handle_Control('prev')} >
						<SVG icon={'Arrow'} /> </Button>

					<Button className={'control-next'}
						onMouseDown={() => this.handle_Control('next')} >
						<SVG icon={'Arrow'} /> </Button>
				</Div>

				<Div className={'carousel-control'} flow={'row'}>
					{ this.render_Control(list) }
				</Div>

			</div>
		);
	};

	componentDidMount (now,max) {

		max = ( this.props.list ).length;

		this.setState({ max });

		setInterval(
			() => {
				if (this.state.now + 1 < max) {
					now = (this.state.now + 1);
				} else { now = (0); };

				this.setState({ now });

			}, 9000
		);
	};

	render () {
		return this.render_Carousel(this.props.list);
	};
};


const mapStateToProps = state => ({
	data: state.DataManager.data_get,
});

export default connect(
	mapStateToProps,
)( Carousel );