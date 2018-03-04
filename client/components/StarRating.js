import React from 'react';
import {connect} from 'react-redux';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {setStars} from '../actions';

const starState = {
	0: 'flaticon-star-1',
	1: 'flaticon-star-half-empty',
	2: 'flaticon-star'
}

class StarRating extends React.Component{
	constructor(props){
		super(props);
	}

	setRating(i, readOnly) {
		if (readOnly){
			return
		}

		if (this.props.ratingState == 2*i+1){
			this.props.dispatch(setStars(2*i+2))
		} else {
			this.props.dispatch(setStars(2*i+1))
		}
	}

	render(){
		let {readOnly} = this.props;
		let rating = this.props.rating || this.props.ratingState;
		let fullStar = Math.floor(rating/2);
		let halfStar = rating % 2;
		let arr = [0,0,0,0,0].fill(2,0,fullStar).fill(1,fullStar,fullStar+halfStar);

		return (
			<span>
				{
					arr.map((val, i) => (
						<i className={starState[val]} 
							key={i} 
							style={styles.star}
							onClick={this.setRating.bind(this, i, readOnly)}>
						</i>
					))
				}
			</span>
		)
	}
}

const mapStateToProps = state => {
	const ratingState = state.rating;

	return {ratingState}
}

export default connect(mapStateToProps)(StarRating)

const styles = {}

styles.star = {
	color: 'silver',
	marginLeft: '0.5em'
}