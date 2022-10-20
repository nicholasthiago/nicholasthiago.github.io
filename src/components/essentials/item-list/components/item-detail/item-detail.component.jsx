import React from 'react';

import SVG from 'components/essentials/svg/svg.component'; 					// eslint-disable-line
import Div from 'components/essentials/div/div.component';					// eslint-disable-line
import Image from 'components/essentials/images/image.component';			// eslint-disable-line
import Button from 'components/essentials/buttons/button.component';		// eslint-disable-line
import LoadingTxt from 'components/essentials/loading/loading.component';	// eslint-disable-line


class ItemDetail extends React.Component {
	state = { enable:true, data:[], loaded:false };

	render_ItemDetail = (item) => {
		let itemClass = (this.props.className) || ('');

		let image = (item.fields.IMAGE_THUMB_URL).replace(
			'https://www.prometheuscube.com/',
			`https://${window.location.host}:8087`
		);

		return (
			<Div className={`list-item ${itemClass}`}
				onMouseDown={this.props.onMouseDown}>

				<Image src={image} onError={() => this.setState({ enable:false })} />

				<Div className={'list-item-title'}>
					<h2> {item.fields.DESCRICAO.toLowerCase()} </h2>
				</Div>

				<Div className={'list-item-description'}>
					<h3> {(item.fields.SECAO).toString()} </h3>
				</Div>

				<Div className={'list-item-tags'}>
					<h4> {(item.fields.DEPTO).toString()} </h4>
				</Div>

			</Div>
		);
	};

	async componentDidMount () {
		await this.setState({
			data	: this.props.item,
			loaded	: true,
		});
	};

	render () {
		let { loaded } = this.state;

		if (loaded) {

			return this.render_ItemDetail(this.props.item);

		} else { return <LoadingTxt /> };
	};
};

export default ( ItemDetail );