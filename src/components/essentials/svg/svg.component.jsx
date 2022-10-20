import React from 'react';

import * as Icon from './src/svg.source';

class SVG extends React.Component {

	SVGType = icon => {
		switch(icon) {

			//	Header Icons ---------------------- //

				case 'FoodDeliveryIcon':
					return <Icon.FoodDeliveryIcon	/>

				case 'Menu':
					return <Icon.MenuIcon			/>

				case 'Cart':
					return <Icon.Cart				/>

				case "OptionsIcon":
					return <Icon.OptionsIcon 		/>

			//	Signal Icons ---------------------- //

				case 'PlusSign':
					return <Icon.PlusSign 			/>

				case 'MinusSign':
					return <Icon.MinusSign 			/>

				case 'Arrow':
					return <Icon.Arrow 				/>

			//	Basic Icons ----------------------- //

				case 'CardIcon':
					return <Icon.CardIcon 			/>

				case 'TimeIcon':
					return <Icon.TimeIcon 			/>

				case 'PhoneIcon':
					return <Icon.PhoneIcon 			/>

				case 'LocationIcon':
					return <Icon.LocationIcon 		/>

				case 'HomeIcon':
					return <Icon.HomeIcon 			/>

				case 'NotesIcon':
					return <Icon.NotesIcon 			/>

				case 'UsersIcon':
					return <Icon.UsersIcon 			/>

				case 'SettingsIcon':
					return <Icon.SettingsIcon 		/>

				case 'PercentIcon':
					return <Icon.PercentIcon 		/>

				case 'FoodTrayIcon':
					return <Icon.FoodTrayIcon 		/>

				case 'SignOutIcon':
					return <Icon.SignOutIcon 		/>

				case "AppsIcon":
					return <Icon.AppsIcon 			/>

				case "HelpIcon":
					return <Icon.HelpIcon 			/>

				case "SearchIcon":
					return <Icon.SearchIcon			/>

			//	Social Media Icons ---------------- //

				case 'Google':
					return <Icon.Google 			/>

				case 'Twitter':
					return <Icon.Twitter 			/>

				case 'WhatsApp':
					return <Icon.WhatsApp 			/>

				case 'Youtube':
					return <Icon.Youtube 			/>

				case 'Facebook':
					return <Icon.Facebook 			/>

				case 'Instagram':
					return <Icon.Instagram 			/>


			default: return null;
		};
	};

	render() {

		const style = {
			padding			: '0px'		,
			display			: 'flex'	,
			background		: 'none'	,
			alignItems		: 'center'	,
			flexDirection	: 'column'  ,
			justifyContent  : 'center'  ,
		};

		if ( this.props.icon && this.props.icon !== '' ) {

			return(
				<div className={'svg-type'} style={style}
					onMouseDown={this.props.onMouseDown} >

					{ this.SVGType(this.props.icon) }

				</div>
			);

		} else { return null };

		
	};
};

export default SVG;