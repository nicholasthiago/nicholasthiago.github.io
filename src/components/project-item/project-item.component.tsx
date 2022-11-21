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

	return (
		<Container className={'project-item tw-flex tw-flex-col tw-gap-3'}>

			<Image src={ FinanceThumb }
				className={'tw-rounded-lg'}
				style={{ scale:'0.8', marginBottom:'-3.5rem', border:'1.5px solid #DDD'}}
			/>

			<h4 className={'project-title tw-text-xl tw-text-gray-700'}> { project.title } </h4>

			<h6 className={'project-about tw-text-base tw-text-gray-500'}> { project.about } </h6>

			<div className={'project-langs tw-flex tw-flex-row tw-justify-center tw-gap-2'}>
			{	( project.langs ).map( ( lang, i ) => {
					return <span key={i}
						style={ langTag( lang ) }
						className={'tw-py-2 tw-px-3 tw-font-medium tw-text-sm tw-rounded tw-text-slate-'} 
					> { lang } </span>
				})
			}
			</div>

			<Link to={ project.link }>
				<Button className={'project-redirect tw-bg-slate-400 tw-border-slate-400 tw-font-medium'}>
					{'Visit Project'}
				</Button>
			</Link>
		</Container>
	);
};

export default ( ProjectItem );