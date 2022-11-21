// Type declaration for Menu and Menu items
import { MenuRef } from "types/types";

// Menu component : props reference
export interface MenuProps {
	dark?	: boolean		;
}

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