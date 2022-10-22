
export interface MenuItemRef {
	title	: String;
	route	: String;
};

// Type declaration for Menu and Menu items
export interface MenuRef {
	home	: MenuItemRef;
	about	: MenuItemRef;
	projs	: MenuItemRef;
	profs	: MenuItemRef;
};

// Menu Reference
export const menu_ref: MenuRef = {
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