import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import reducer from './reducers'
import App from './components/App.js';

const middlewares = [thunk]
// for test only
//middlewares.push(createLogger());

const store = createStore(
	reducer,
	applyMiddleware(...middlewares)
);

render((
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>	
), document.getElementById('root'));

