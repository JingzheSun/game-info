import React from 'react';
import Header from './Header.js';
import Body from './Body.js';

//import  from '../../static/bootstrap.css';

export default class App extends React.Component{
	render(){
		return (
			<div className='container'>
				<Header />
				<Body />
			</div>
		)
	}
};

