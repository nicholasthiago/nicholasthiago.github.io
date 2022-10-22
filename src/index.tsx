import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from 'app/App';
import { BrowserRouter as Router } from "react-router-dom";

import reportWebVitals from 'tests/reportWebVitals';

const root = ReactDOM.createRoot(
	document.getElementById('app-root') as HTMLElement
);

root.render(
	<Router>
		<App />
	</Router>
);


reportWebVitals();