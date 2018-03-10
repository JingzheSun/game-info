import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {getGames, getWiki} from '../actions';
import Comments from './Comments.js';
import StarRating from './StarRating.js';


const AddComment = ({gameId, route, authId, rating}) => (
	<form method='POST' action='/games/comments'>
		<h3>Leave your comment</h3>
		<h5>Rate it <StarRating /></h5><br/>
		<textarea name='comment' className='form-control' placeholder='any comments' required></textarea><br/>
		<input type='hidden' name='author' value={authId || ''}/>
		<input type='hidden' name='route' value={route || ''}/>
		<input type='hidden' name='gameId' value={gameId || ''}/>
		<input type='hidden' name='rating' value={rating || 5}/>
	</form>
)

class Articles extends React.Component{
	constructor(props){
		super(props);

		let name = props.match.params.gameName;
	}

	render(){
		let {location, authInfo, wiki, rating} = this.props;
		let game = this.props.game || {};
		return (
			<div className='container' style={styles.container}>
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
)(Articles)

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