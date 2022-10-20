import React from 'react';
import './item-list.styles.scss';

import { connect } from 'react-redux';

import SVG from 'components/essentials/svg/svg.component'; 					// eslint-disable-line
import Div from 'components/essentials/div/div.component';					// eslint-disable-line
import Image from 'components/essentials/images/image.component';			// eslint-disable-line
import Button from 'components/essentials/buttons/button.component';		// eslint-disable-line
import LoadingTxt from 'components/essentials/loading/loading.component';	// eslint-disable-line

import ItemDetail from './components/item-detail/item-detail.component';
import ItemSimple from './components/item-simple/item-simple.component';
import ItemBanner from './components/item-simple/item-simple.component';


class ItemList extends React.Component {
	state = { data:[], loaded:false };

	render_ItemType = (item,type,itemClass,index) => {

		// Verify if Item is Enabled or Not..
		if (type !== 'menu') {

			item.fields.EMBALAGEM = ( item.fields.EMBALAGEM.split('X')[1] ) || ('');
			item.fields.DESCRICAO = ( item.fields.DESCRICAO.replace(/[0-9]{1,2}[X]{1}?/g,'') ) || ('');

			switch(type) {

				case 'detail':
					return 	<ItemDetail className={itemClass} item={item} key={index}
									onMouseDown={() => this.props.onMouseDown(item)} />;

				case 'simple':
					return 	<ItemSimple className={itemClass} item={item} key={index}
									onMouseDown={() => this.props.onMouseDown(item)} />;

				case 'banner':
					return 	<ItemBanner className={itemClass} item={item} key={index}
									onMouseDown={() => this.props.onMouseDown(item)} />;

				default:
					return 	<ItemSimple className={itemClass} item={item} key={index}
									onMouseDown={() => this.props.onMouseDown(item)} />;
			};

		} else {
			return	<Button className={itemClass} key={index}
						onMouseDown={() => this.props.onMouseDown(item)} >
						{item.toLowerCase()}
					</Button>
		};
	};

	render_ItemList = (list,item,key) => {

		let type = (this.props.type) ? (this.props.type) : ('simple');

		let listClass = (this.props.listClass) || ('');
		let itemClass = (this.props.itemClass) || ('');

		return (
			<Div flow={'row'} className={`item-list ${type}-list ${listClass}`}>

			{	Object.entries(list).map( (e,i) => { key = e[0]; item = e[1];
					if (this.props.max) {

						if (i < this.props.max) {
							return this.render_ItemType(item,type,itemClass,i);

						} else { return null };

					} else { return this.render_ItemType(item,type,itemClass,i) };
				})
			}
			</Div>
		);
	};

	async componentDidMount () {
		await this.setState({
			list	: this.props.list,
			loaded	: true,
		});
	};

	render () {
		let { loaded } = this.state;

		if (loaded) {

			return this.render_ItemList(this.props.list);

		} else { return <LoadingTxt /> };
	};
};


const mapStateToProps = state => ({
	data: state.DataManager.data_get,
});

export default connect(
	mapStateToProps,
)( ItemList );