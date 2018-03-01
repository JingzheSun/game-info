import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {getGames} from '../actions.js';


class GameInfo extends React.Component{
	constructor(props){
		super(props);
		this.deleteComment = this::this.deleteComment;

		props.dispatch(getGames());
	}

	deleteComment(commentId, gameId) {
		axios.patch('/games/comments', {commentId, gameId})
		.then(res => {
			this.props.dispatch(getGames());
		})
		.catch(err => console.log(err))

	}

	render(){
		let {location, authInfo} = this.props;
		let game = this.props.game || {_id: 0}
		return (
			<div className='container'>
				<img src={game.image} style={styles.pic}/>
				{	
					game.comments && game.comments.map((c,i) => (
						<div key={i} style={styles.comment}>
							rating: {c.rating}  
							by {c.author.fbname || c.author.ttname || c.author.username}
							<p>{c.comment}</p>
							{
								authInfo.id == c.author._id && 
								<button onClick={this.deleteComment.bind(this, c._id, game._id)}>Delete</button>
							}
							created at {c.createdAt}
						</div>
					))
				}
				<form method='POST' action='/games/comments'>
					<input type='number' name='rating' className='form-control' min='1' max='10' placeholder='rating' required/><br/>
					<input type='text' name='comment' className='form-control' placeholder='any comments' required/><br/>
					<input type='hidden' name='author' value={authInfo.id}/>
					<input type='hidden' name='route' value={location.pathname}/>
					<input type='hidden' name='gameId' value={game._id}/>
					<input type='submit' name='submit' value='submit' className='btn btn-success'/>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state,{match}) => {
	const { gameName } = match.params;
	const { authInfo } = state;
	const { items } = state.games;
	const game = items.find(g => g.name == gameName)

	return {authInfo, game}
}

export default connect(
	mapStateToProps
)(GameInfo)

const styles = {}

styles.pic = {
	maxHeight:'800px',
	maxWidth: '100%',
	margin: '60px auto'
}

styles.comment = {
	color: 'lightgray',
	border: '1px solid white',
	padding: '10px',
	margin: '5px'
}