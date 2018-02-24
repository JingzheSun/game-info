import React from 'react';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';

export default class GameInfo extends React.Component{
	constructor(props){
		super(props);
		console.log(props)
	}

	componentDidMount(){
	}

	render(){
		return (
			<div>fregthyj
				<Route path={`${this.props.match.url}/:gameName`} render={ props =>
					<Tmp a={props.location}/>
				}/>
			</div>
		)
	}
}


const Tmp = ({a}) => {
	console.log(a)
	return (
		<p>
			<img src={a.state.info.image} style={{height: '700px'}}/>
		</p>
	)
}
