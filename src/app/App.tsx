import { Routes, Route } from 'react-router';
import './App.scss';

import Menu		from 'components/menu/menu.component';

import Home		from 'pages/home/home.page';
import About	from 'pages/about/about.page';
import Projects	from 'pages/projects/projects.page';


const App = () => {

	return (
		<div className={'App tw-mb-9'}>

			<Menu />

			<Routes>

				<Route path={'/'	 }		element={ <Home  />		} />
				<Route path={'/about'}		element={ <About />		} />
				<Route path={'/projects'}	element={ <Projects />	} />

			</Routes>

		</div>
	);
};

export default ( App );