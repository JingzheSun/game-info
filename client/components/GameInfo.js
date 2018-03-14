import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {getGames, getWiki} from '../actions';
import Comments from './Comments.js';
import StarRating from './StarRating.js';

const GameImage = ({image}) => (
	<img src={image} style={styles.pic}/>
)

const Wiki = ({wiki}) => (
	wiki ? <div dangerouslySetInnerHTML={{__html: wiki}}></div>	: <h1>No wiki yet</h1>
)

const GameComments = ({game, authInfo}) => (
	<div>
		<h1>Comments</h1>
	{	
		game.comments && game.comments.map((c,i) => (
			<Comments key={i} game={game} c={c} authInfo={authInfo}/>
		))
	}
	</div>
)

const AddComment = ({gameId, route, authId, rating}) => (
	<form method='POST' action='/games/comments'>
		<h3>Leave your comment</h3>
		<h5>Rate it <StarRating /></h5><br/>
		<textarea name='comment' className='form-control' placeholder='any comments' required></textarea><br/>
		<input type='hidden' name='author' value={authId || ''}/>
		<input type='hidden' name='route' value={route || ''}/>
		<input type='hidden' name='gameId' value={gameId || ''}/>
		<input type='hidden' name='rating' value={rating || 5}/>
		<input type='submit' name='submit' value='submit' className='btn btn-success'/>
	</form>
)

class GameInfo extends React.Component{
	constructor(props){
		super(props);

		let name = props.match.params.gameName;
		props.dispatch(getWiki(name));
		props.dispatch(getGames());
	}

	render(){
		let {location, authInfo, wiki, rating} = this.props;
		let game = this.props.game || {};
		return (
			<div className='container' style={styles.container}>
				<h1>{game.name}</h1><hr/>
				<GameImage {...game}/>	
				<Wiki wiki={wiki}/><hr style={{background: 'white'}}/>
				<GameComments game={game} authInfo={authInfo} />
				<AddComment gameId={game._id} route={location.pathname} authId={authInfo.id} rating={rating}/>
			</div>
		)
	}
}

const mapStateToProps = (state, { match }) => {
	const { gameName } = match.params;
	const { authInfo, wikis, rating } = state;
	const { items } = state.games;
	const wiki = state.wikis.items[gameName]
	const game = items.find(g => g.name == gameName)

	return {authInfo, game, wiki, rating}
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