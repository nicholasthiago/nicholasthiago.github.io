import React from 'react';

import SVG from 'components/essentials/svg/svg.component'; 					// eslint-disable-line
import Div from 'components/essentials/div/div.component';					// eslint-disable-line
import Image from 'components/essentials/images/image.component';			// eslint-disable-line
import Button from 'components/essentials/buttons/button.component';		// eslint-disable-line
import LoadingTxt from 'components/essentials/loading/loading.component';	// eslint-disable-line


class ItemSimple extends React.Component {
	state = { data:[], loaded:false };

	render_ItemSimple = (item) => {
		let itemClass = (this.props.className) ? (this.props.className) : ('');

		return (
			<Div className={`list-item ${itemClass}`}>

				<Div className={'list-item-title'}>
					<h2> {item.DESCRICAO.toLowerCase()} </h2>
				</Div>

				<Div className={'list-item-description'}>
					<h3> {item.DETALHES} </h3>
				</Div>

				<Div className={'list-item-tags'}>
					{ (!item.TAGS) ? (null) : ( <h4> {(item.TAGS).toString()} </h4> ) }
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

			return this.render_ItemSimple(this.props.item);

		} else { return <LoadingTxt /> };
	};
};

export default ( ItemSimple );