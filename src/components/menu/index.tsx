import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import Button from 'react-bootstrap/Button';

interface MenuRef {
	home	: MenuItemRef;
	about	: MenuItemRef;
	projs	: MenuItemRef;
	profs	: MenuItemRef;
}
interface MenuItemRef {
	title	: String;
	route	: String;
};

const menu_ref: MenuRef = {
	home	: {
		title: 'Home'		,
		route: '/'			,
	},
	about	: {
		title: 'About'		,
		route: '/about'		,
	},
	projs	: {
		title: 'Projects'	,
		route: '/projects'	,
	},
	profs	: {
		title: 'Profiles'	,
		route: '/profiles'	,
	},
};

const menuConstructor = ( ref: MenuRef ) =>
	Object.values( ref ).map( ( option, i ) => {
		return (
			<Link key={ i } to={ option.route }> 
				<Button
					variant={'outline-primary'}
					className={ `menu-item-${ option.title }` }
					onMouseDown={ () => console.log( option.route ) }
				>
					{ option.title }
				</Button>
			</Link>
		);
	});


const Menu = () => {
	return (
		<div className={'page-menu'}>
			{ menuConstructor( menu_ref ) }
		</div>
	);
};


export default ( Menu );