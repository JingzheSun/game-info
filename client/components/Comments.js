import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import StarRating from './StarRating.js';
import {getGames} from '../actions';


class Comments extends React.Component{
	constructor(props){
		super(props);
		this.deleteComment = this::this.deleteComment;
	}

	deleteComment(commentId, Id, type) {
		axios.patch(`/${type}/comments`, {commentId, Id})
		.then(res => {
			this.props.dispatch(getGames());////////
		})
		.catch(err => console.log(err))

	}

	render(){
		let {authInfo, c, game, article} = this.props;
		let type = game ? 'games' : 'articles';
		let Id = game ? game._id : article._id; 
		return (
			<div style={styles.comment}>
				<h5>
					{c.author.fbname || c.author.ttname || c.author.username}
					<StarRating rating={c.rating} readOnly={true}/>  
				</h5>
				<p>{c.comment}</p>
				<div style={{alignSelf: 'flex-end'}}>
				{
					authInfo.id == c.author._id && 
					<a href='#' onClick={this.deleteComment.bind(this, c._id, Id, type)}>Delete</a>
				}
					<span style={{marginLeft: '10px', float: 'right'}}>created at {c.createdAt}</span>
				</div>
			</div>
		)
	}
}

export default connect()(Comments)

const styles = {}

styles.comment = {
	color: 'lightgray',
	border: '1px solid white',
	padding: '10px',
	margin: '5px',
	display: 'flex',
	flexFlow: 'column',
	flexWrap: 'nowrap',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
}