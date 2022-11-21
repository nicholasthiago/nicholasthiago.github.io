import {
	Nav			,
	Form		,
	Navbar		,
	Container,	} from 'react-bootstrap';
import { useToggle } from 'hooks/hooks';
import { LinkContainer as Link } from 'react-router-bootstrap';

import { MenuRef } from 'types/types';
import { MenuProps, menu_ref } from './reference';


// Menu builder : using menu_ref as main reference
const menuConstructor = ( ref: MenuRef ) =>
	Object.values( ref ).map( ( option, i ) => {
		return (
			<Link to={ option.route } key={ i }>
				<Nav.Link href={ option.route }
					className={ `menu-item-${ option.title }` }
					onMouseDown={ () => console.log( option.route ) }
				>
					{ option.title }
				</Nav.Link>
			</Link>
		);
	});


const Menu = ({ dark = false } : MenuProps ) => {

	const [ theme, toggleTheme ] = useToggle( dark );

	return (
		<Navbar className={'page-menu'}
			fixed={'top'}
			expand={'lg'} 
			bg={ ( theme ) ? 'dark' : 'light' }
			variant={ ( theme ) ? 'dark' : 'light' }
		>
			<Container>

				<Link to={'/'}>
					<Navbar.Brand> {'Welcome'} </Navbar.Brand>
				</Link>

				<Navbar.Toggle aria-controls={"basic-navbar-nav"} />

				<Navbar.Collapse id={"basic-navbar-nav"}>
					<Nav className={"me-auto"}>
						
						{ menuConstructor( menu_ref ) }

						<Form.Check
							onMouseDown={ () => toggleTheme() }
							className={'menu-switch'}
							type={'switch'}
							label={'Theme'}	
						/>

					</Nav>
				</Navbar.Collapse>

			</Container>
		</Navbar>
	);
};


export default ( Menu );