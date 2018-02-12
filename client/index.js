import React from 'react';
import {render} from 'react-dom';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import App from './modules/App.js';

render((
	<BrowserRouter>
		<App />
	</BrowserRouter>	
), document.getElementById('root'));

