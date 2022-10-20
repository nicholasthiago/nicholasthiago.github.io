import React from 'react';

import SVG from 'components/essentials/svg/svg.component'; 					// eslint-disable-line
import Div from 'components/essentials/div/div.component';					// eslint-disable-line
import Image from 'components/essentials/images/image.component';			// eslint-disable-line
import Button from 'components/essentials/buttons/button.component';		// eslint-disable-line
import LoadingTxt from 'components/essentials/loading/loading.component';	// eslint-disable-line


class ItemBanner extends React.Component {
	state = { data:[], loaded:false };

	render_ItemBanner = (item) => {
		let itemClass = (this.props.className) ? (this.props.className) : ('');

		return (
			<Div className={`list-item ${itemClass}`}>

				<Div className={'list-item-title'}>
					<h2> {item.toLowerCase()} </h2>
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

			return this.render_ItemBanner(this.props.item);

		} else { return <LoadingTxt /> };
	};
};

export default ( ItemBanner );