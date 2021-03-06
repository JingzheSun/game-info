import React from 'react';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from '../components/Home.js';
import GameInfo from './GameInfo.js';
import Animes from './Animes.js';
import Subreddits from '../containers/ManageSubreddits.js'; 
import Auth from '../containers/AuthError.js';

export default class Body extends React.Component{
	render(){
		return (
			<Switch>
				<Route path='/' exact component={Home}/>
				<Route path='/reddits' component={Subreddits}/>	
				<Route path='/articles' component={R}/>	
				<Route path='/animes' component={Animes}/>				
				<Route path='/auth' component={Auth} />
				<Route path='/games/:gameName' component={GameInfo} />
			</Switch>
		)
	}
};

const R = (props) => {
	return (
		<div>
			<img src='/Ragnaros.png'/>
		</div>
	)
}
 