import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home		from 'pages/home';
import About	from 'pages/about';


const App = () => (
	<div className="App">

		<header className="App-header">
		</header>

		<Router>
			<Route path={'/'	 }> <Home	/>	</Route>
			<Route path={'/about'}> <About	/>	</Route>
		</Router>

	</div>
);

export default App;