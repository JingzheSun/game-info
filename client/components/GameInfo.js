import React from 'react';
import {connect} from 'react-redux';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {getGames} from '../actions.js';


class GameInfo extends React.Component{
	constructor(props){
		super(props);
		props.dispatch(getGames())
	}

	componentDidMount(){
		
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
							rating: {c.rating} by {c.author}
							<p>
								{c.comment}
							</p>
						</div>
					))
				}
				<form method='POST' action='/games/comments'>
					<input type='number' name='rating' className='form-control' min='1' max='10' placeholder='rating' required/><br/>
					<input type='text' name='comment' className='form-control' placeholder='any comments' required/><br/>
					<input type='hidden' name='author' value={authInfo.username}/>
					<input type='hidden' name='route' value={location.pathname}/>
					<input type='hidden' name='gameId' value={game._id}/>
					<input type='submit' name='submit' value='submit' className='btn btn-success'/>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state,{match}) => {
	const { gameName } = match.params 
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