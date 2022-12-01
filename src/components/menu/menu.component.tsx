import {
	Nav			,
	Navbar		,
	Button		,
	Container	,
} from 'react-bootstrap';
import './menu.styles.scss';
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
	return (
		<Navbar className={'page-menu'}
			bg={'light'}
			fixed={'top'}
			expand={'sm'}
			variant={'light'}
		>
			<Container>

				<Link to={'/'}>
					<Navbar.Brand> {'Nicholas Thiago'} </Navbar.Brand>
				</Link>

				<Navbar.Toggle aria-controls={"basic-navbar-nav"} />

				<Navbar.Collapse id={"basic-navbar-nav"}>
					<Nav className={""}>
						
						{ menuConstructor( menu_ref ) }

						{/*
							<Form.Check
								onMouseDown={ () => toggleTheme() }
								className={'menu-switch'}
								type={'switch'}
							/>
						*/}

					</Nav>
				</Navbar.Collapse>

				<Link className={'menu-contact'} to={'/contact'}>
					<Button> {"Let's chat"} </Button>
				</Link>

			</Container>
		</Navbar>
	);
};


export default ( Menu );