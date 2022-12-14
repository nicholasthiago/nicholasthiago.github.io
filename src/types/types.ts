// Menu Options : ref type
export type MenuRef = {
	[ key: string ]	: {
		title	: string	;
		route	: string	;
	}
};

// Projects : ref type
export type ProjectRef = {
	[ key: string ]	: {
		key		: string	;
		title	: string	;
		link	: string	;
		langs	: string[]	;
		about	: string	;
		onGit	: boolean	;
	}
};