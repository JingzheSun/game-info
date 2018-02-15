import React from 'react';
import Header from '../containers/HeaderStyle.js';
import Body from './Body.js';

//import  from '../../static/bootstrap.css';

export default class App extends React.Component{
	render(){
		return (
			<div>
				<Header />
				<Body />
				<div style={{height:'10px', background: 'red'}}>
				</div>
			</div>
		)
	}
};

