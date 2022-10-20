import React from 'react';
import './menu.styles.scss';

import SVG from 'components/essentials/svg/svg.component'; 					// eslint-disable-line
import Div from 'components/essentials/div/div.component';					// eslint-disable-line
import Button from 'components/essentials/buttons/button.component';		// eslint-disable-line


class Menu extends React.Component {

	state = { menu:[], drop:'none' };

	handle_Display (drop) {
		drop = this.state.drop;

		if (drop !== 'flex') {
			return this.setState({ drop:'flex' });

		} else {
			return this.setState({ drop:'none' });
		};
	};

	async handle_Nav (anchor) {
		let origin = window.location.origin;
		let nav = anchor.split('+');

		if (nav[0] === 'menu') {
			return this.props.onDrop(nav[1]);

		} else {

			try {
				return document.querySelector(anchor).scrollIntoView(true);
	
			} catch {
	
				try {
					return window.location = `${origin}${anchor}`;
	
				} catch {
					return window.location = anchor;
				};
	
			} finally {
				return null;
			};
		};
	};


	render_Options (options) {
		return Object.entries(options).map( (e,i) => { let item = e[1];
			if ( item.anchor !== '/unready') {
				return (
					<Button key={i}
						className={'menu-item'}
						onMouseDown={() => this.handle_Nav(item.anchor)}>
						{ <SVG icon={item.icon} /> || null }
						{ ( item.label ) || null }
					</Button>
				);
			} else { return null };
		});
	};

	render_DesktopMenu (menu,c,t) {
		return (
			<Div flow={'row'}
				className={`component-menu desktop-menu ${c} theme-${t}`}>

				{ this.render_Options(menu.options) }

			</Div>
		);
	};

	render_MobileMenu  (menu,c,t) {
		return (
			<Div className={`component-menu mobile-menu ${c} theme-${t}`}>

				<Button className={'menu-title'}
					onMouseDown={() => this.handle_Display()}
				> { menu.title }
					{ <SVG icon={menu.icon} /> || null }
				</Button>

				<div className={'dropdown-menu'} style={{ display:this.state.drop }}>
					{ this.render_Options(menu.options) }
				</div>

			</Div>
		);
	};


	render_Menu = (menu) => {

		let w = ( window.innerWidth ) ;

		let l = ( this.props.break ) || 768 ;

		let c = ( this.props.className ) || '' ;

		let t = ( this.props.theme ) || 'dark' ;

		switch (true) {

			case ( w < l+1 	|| l === 'break' 	):
				return this.render_MobileMenu(menu,c,t);

			case ( w > l 	|| l === 'inline'	):
				return this.render_DesktopMenu(menu,c,t);

			default:
				return this.render_MobileMenu(menu,c,t);
		};
	};

	async componentDidMount () {
		await this.setState({ menu : this.props.menu });
	};

	render () {

		return (
			<Div className={'component-menu-wrapper'}>
				{ this.render_Menu(this.props.menu) }
			</Div>
		);
	};
};

export default ( Menu );