import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router';
import Menu		from 'components/menu/menu.component';

import Home		from 'pages/home';
import About	from 'pages/about';


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

export default App;