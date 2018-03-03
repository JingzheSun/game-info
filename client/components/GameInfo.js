import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {getGames, getWiki} from '../actions';
import Comments from './Comments.js';

const GameImage = ({image}) => (
	<img src={image} style={styles.pic}/>
)

const Wiki = ({wiki}) => (
	wiki ? <div dangerouslySetInnerHTML={{__html: wiki}}></div>	: <h1>No wiki yet</h1>
)

const GameComments = ({game, authInfo}) => (
	<div>
	{	
		game.comments && game.comments.map((c,i) => (
			<Comments key={i} game={game} c={c} authInfo={authInfo}/>
		))
	}
	</div>
)

const AddComment = ({gameId, route, authId}) => (
	<form method='POST' action='/games/comments'>
		<input type='number' name='rating' className='form-control' min='1' max='10' placeholder='rating' required/><br/>
		<input type='text' name='comment' className='form-control' placeholder='any comments' required/><br/>
		<input type='hidden' name='author' value={authId || ''}/>
		<input type='hidden' name='route' value={route || ''}/>
		<input type='hidden' name='gameId' value={gameId || ''}/>
		<input type='submit' name='submit' value='submit' className='btn btn-success'/>
	</form>
)

class GameInfo extends React.Component{
	constructor(props){
		super(props);

		props.dispatch(getGames());
	}

	componentDidMount(){
		let name = this.props.match.params.gameName;
		this.props.dispatch(getWiki(name))
	}

	render(){
		let {location, authInfo, wiki} = this.props;
		let game = this.props.game || {};
		return (
			<div className='container' style={styles.container}>
				<GameImage {...game}/>	
				<Wiki wiki={wiki}/>
				<GameComments game={game} authInfo={authInfo} />
				<AddComment gameId={game._id} route={location.pathname} authId={authInfo.id}/>
			</div>
		)
	}
}

const mapStateToProps = (state,{match}) => {
	const { gameName } = match.params;
	const { authInfo, wikis } = state;
	const { items } = state.games;
	const wiki = state.wikis.items[gameName]
	const game = items.find(g => g.name == gameName)

	return {authInfo, game, wiki}
}

export default connect(
	mapStateToProps
)(GameInfo)

const styles = {}

styles.container = {
	marginTop: '60px',
	color: 'white'
}

styles.pic = {
	maxHeight:'600px',
	maxWidth: '40%',
	margin: '15px',
	float: 'right'
}

styles.comment = {
	color: 'lightgray',
	border: '1px solid white',
	padding: '10px',
	margin: '5px'
}