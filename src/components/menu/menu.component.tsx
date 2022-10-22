import React from 'react';
import './style.scss';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer as Link } from 'react-router-bootstrap';

import { MenuRef, menu_ref } from './reference';


// Menu builder, using menu_ref as main reference
const menuConstructor = ( ref: MenuRef ) =>
	Object.values( ref ).map( ( option, i ) => {
		return (
			<Link to={ option.route }>
				<Nav.Link href={ option.route }
					className={ `menu-item-${ option.title }` }
					onMouseDown={ () => console.log( option.route ) }
				>
					{ option.title }
				</Nav.Link>
			</Link>
		);
	});


const Menu = () => {
	return (
		<Navbar className={'page-menu'}
			bg={"light"}
			expand={'lg'} 
			fixed={( window.innerWidth > 768 ) ? 'top' : 'bottom' }
		>
			<Container>

				<Link to={'/'}>
					<Navbar.Brand> {'Welcome'} </Navbar.Brand>
				</Link>

				<Navbar.Toggle aria-controls={"basic-navbar-nav"} />

				<Navbar.Collapse id={"basic-navbar-nav"}>
					<Nav className={"me-auto"}>
						{ menuConstructor( menu_ref ) }
					</Nav>
				</Navbar.Collapse>

			</Container>
		</Navbar>
	);
}


export default ( Menu );