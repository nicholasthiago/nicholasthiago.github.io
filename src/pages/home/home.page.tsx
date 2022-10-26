import React from 'react';

// interface / reference imports
import {
	skill_ref		,
	SkillItemRef	,
} from './home.reference';

// react-bootstrap imports
import {
	Col			,
	Row			,
	Badge		,
	Container,	
	Stack,
} from 'react-bootstrap';


// builds a list of skills, based on home.reference.ts
const skill_list = ( ref: Array <SkillItemRef> ) =>
	Object.values( ref ).map( ( skill, i ) => {
		return (
			<Row className={'skill-item align-content-sm-center'} key={ i }>

				<Col sm={2}>
					<Badge className={'tw-w-32 tw-px-1 tw-py-2'}> { skill.lang } </Badge>
				</Col>

				<Col sm={2} className={'tw-flex tw-items-center'}>
					<h6 className={'tw-text-zinc-500 tw-w-32 tw-text-start tw-m-0'}> { skill.exp } </h6>
				</Col>

			</Row>
		);
	});


const Home = () => {
	return (
		<Container className={'page-home'} >

			<Stack className={'skill-list'}
				gap={2}
				direction={'vertical'}
			>
				<h5 className={'text-start tw-text-zinc-500'}>
					{'Skills,'}
				</h5>

				{ skill_list( skill_ref )}

			</Stack>

		</Container>
	);
};

export default ( Home );