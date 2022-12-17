import { Badge, Button, Container, Image } from "react-bootstrap";
import { LinkContainer as Link } from 'react-router-bootstrap';

import FinanceThumb from 'assets/finance-tracker.jpg';

type Props = {
	project: {
		key		: string	;
		title	: string	;
		link	: string	;
		langs	: string[]	;
		about	: string	;
		onGit	: boolean	;
	};
};


const ProjectItem = ({ project }: Props ) => {

	const langTag = ( lang: string ) => {
		switch( lang ) {
			case 'Python'		: return { backgroundColor:'#4b8bbe', color:'#ffd43b' };
			case 'React'		: return { backgroundColor:'#61dbfb', color:'#444444' };
			case 'TypeScript'	: return { backgroundColor:'#007acc', color:'#f1f9f5' };
			case 'JavaScript'	: return { backgroundColor:'#f0db4f', color:'#f1f9f5' };
			case 'Firebase'		: return { backgroundColor:'#f6820d', color:'#f1f9f5' };
			default				: return { backgroundColor:'#007acc', color:'#f1f9f5' };
		};
	};

	const projRedirect = ( onGit: Boolean, link: string ) => {
		if ( onGit ) {
			return ( 'https://nicholasthiago.github.io' + link );
		} else {
			return ( link )
		};
	};

	return (
		<Container className={'project-item tw-flex tw-flex-col tw-items-center tw-gap-3 tw-mb-8 tw-mt-2'}>

			<h4 className={'project-title tw-text-xl tw-text-gray-700'}> { project.title } </h4>

			<h6 className={'project-about tw-text-base tw-text-gray-500 tw-max-w-screen-md tw-text-start'}> { project.about } </h6>

			<div className={'project-langs tw-flex tw-flex-row tw-justify-center tw-gap-2'}>
			{	( project.langs ).map( ( lang, i ) => {
					return <span key={i}
						style={ langTag( lang ) }
						className={'tw-py-2 tw-px-3 tw-font-medium tw-text-sm tw-rounded tw-text-slate-'} 
					> { lang } </span>
				})
			} </div>

			<div className={'project-links tw-flex tw-flex-row tw-gap-3'}>
				<Button
					className={'project-redirect tw-bg-slate-400 tw-border-slate-400 tw-font-medium'}
					onMouseDown={ () => window.location.href = projRedirect( project.onGit, project.link ) }	
				>
					{'Visit Project'}
				</Button>

				<Button
					className={'project-redirect tw-bg-gray-800 tw-border-gray-800 tw-font-medium'}
					onMouseDown={ () => window.location.href = 'https://github.com/nicholasthiago/' + project.key }
				>
					{'Code on GitHub'}
				</Button>
			</div>

		</Container>
	);
};

export default ( ProjectItem );