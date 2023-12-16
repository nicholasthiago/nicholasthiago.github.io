import { ProjectRef } from "types/types";

// Projects : Reference initialization
export const project_ref: ProjectRef = {
	'finance-tracker': {
		key		: 'finance-tracker'		,
		title	: 'Finance Tracker'		,
		link	: '/finance-tracker'	,
		onGit	: true					,
		langs	: [ 'TypeScript', 'React', 'Firebase' ],
		about	: 
			'This project is about a behavior that helps everyone to have a good balance handling, using tags to better identify each income or expense. It uses React with TypeScript, with some Bootstrap and TailwindCSS to general style rules, and for more specific rules, SASS was used.',
	},
	'nutrition-data': {
		key		: 'nutrition'			,
		title	: 'Nutrition Data'		,
		link	: 'https://ntx-nutrition-data.vercel.app/'	,
		onGit	: false					,
		langs	: [ 'NextJS', 'TypeScript', 'GraphQL', 'Node' ],
		about	: 
			'This project has a great load of information about food nutrition, to select some food and check all the nutrition stats, using tags to better identify each income or expense. It uses NextJS with TypeScript, together with GraphQL ( Apollo ) to fuel the front-end.',
	},
	'health-care-remote': {
		key		: 'health-care-remote'			,
		title	: 'Health Care Remote'	,
		link	: 'https://health-care-remote.vercel.app/'	,
		onGit	: false					,
		langs	: [ 'NextJS', 'JavaScript', 'MongoDB', 'Node', 'Redux' ],
		about	: 
			'This project came from an idea of making simple doctor appointments easier, having an emergency queue, scheduled appointments and even prescriptions.',
	},
}