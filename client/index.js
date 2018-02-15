import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import reducer from './reducers'
import App from './components/App.js';

const store = createStore(
	reducer,
	applyMiddleware(thunk)
);

render((
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>	
), document.getElementById('root'));

