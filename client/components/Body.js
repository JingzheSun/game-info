import React from 'react';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Games from '../containers/FilterGameList.js';
import GameInfo from './GameInfo.js';
import Auth from '../containers/AuthError.js';

export default class Body extends React.Component{
	render(){
		return (
			<div className='container'>
				<Switch>
					<Route path='/' exact component={Games}/>
					<Route path='/r' component={R}/>
					<Route path='/games' component={GameInfo} />
					<Route path='/auth' component={Auth} />
				</Switch>
			</div>
		)
	}
};

const R = () => (
	<div>
		<img src='Ragnaros.png'/>
	</div>
)
 