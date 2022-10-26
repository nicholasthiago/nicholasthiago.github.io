import React from 'react';
import { Routes, Route } from 'react-router';
import './App.scss';

import Menu		from 'components/menu/menu.component';

import Home		from 'pages/home/home.page';
import About	from 'pages/about/about.page';


const App = () => {

	return (
		<div className={'App'}>

			<Menu />

			<Routes>

				<Route path={'/'	 } element={ <Home />	} />
				<Route path={'/about'} element={ <About />	} />

			</Routes>

		</div>
	);
};

export default ( App );