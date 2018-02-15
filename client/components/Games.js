import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateKeyWord} from '../actions.js';
import PropTypes from 'prop-types';

import {getGames} from '../actions.js'

export let SearchBox = ({dispatch}) => {
	let input;
	return (
		<input type='text' 
			className='form-control' 
			onChange={() => {
					dispatch(updateKeyWord(input.value))
				} 
			}
			style={styles.input} 
			ref={node => {
         		input = node
        	}}
		/>
	)
}

SearchBox = connect()(SearchBox)

export class Games extends React.Component{

	componentDidMount(){
		this.props.getGames()
	}

	render(){ 
		let {games} = this.props;
		console.log(games);
		return (
			<div>
				<SearchBox />
				<div className='container' style={styles.box}>
					{
						games.map((info, i) => (
							<div key={i}>
								<Link to={`/games/${info.name}`}>
									<img src={info.image} style={{height:'200px'}}/>
									<div style={styles.title}>
										{info.name}
									</div>
								</Link>
							</div>
						))
					}
				</div>
			</div>
		)
	}
};

// Games.propTypes = {
//   games: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.number.isRequired,
//     description: PropTypes.bool.isRequired,
//     image: PropTypes.string.isRequired,
//     category: PropTypes.array.isRequired
//   }).isRequired).isRequired,
//   getGames: PropTypes.func.isRequired
// }


const styles = {};

styles.input = {
	marginTop: '50px'
}

styles.box = {
	display: 'flex',
	flexFlow: 'row',
	flexWrap: 'wrap',
	justifyContent: 'space-around',
	alignItems: 'center' 
}

styles.img = {
	border: '2px',
	borderRadius: '1em',
	height: '100%'
}

styles.title = {
	color: 'white',
	textAlign: 'center',
	fontSize: '20px'
}