import ProjectItem from "components/project-item/project-item.component";
import { Container } from "react-bootstrap";
import { project_ref } from './reference';



const Projects = () => {

	const render_ProjectList = () => {
		return Object.values( project_ref ).map( ( proj, i ) => {
			return <ProjectItem key={i} project={ proj } />
		});
	};

	return (
		<Container className={'page-projects'}>

			{ render_ProjectList() }

		</Container>
	);
};

export default ( Projects );