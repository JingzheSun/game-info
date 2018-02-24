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
		<div className='container'>
			<input type='text' 
				className='form-control' 
				placeholder='game keyword'
				onChange={() => {
						dispatch(updateKeyWord(input.value))
					} 
				}
				style={styles.input} 
				ref={node => {
	         		input = node
	        	}}
			/>
		</div>
	)
}

SearchBox = connect()(SearchBox)


export class Games extends React.Component{

	static propTypes = {
	    games: PropTypes.arrayOf(PropTypes.shape({
	    	name: PropTypes.string.isRequired,
	    	description: PropTypes.string.isRequired,
	    	image: PropTypes.string.isRequired,
	    	category: PropTypes.array.isRequired
	    }).isRequired).isRequired
	}

	componentDidMount() {
    	const { dispatch } = this.props
    	dispatch(getGames())
  	}

	render(){ 
		let {games} = this.props;
		return (
			<div>
				<SearchBox />
				<div className='container' style={styles.box}>
					{
						games.map((info, i) => (
							<div key={i} style={styles.frame} >
								<Link to={`/games/${info.name}`} 
			        			style={{textDecoration: 'none'}}>
									<img src={info.image} style={styles.img} className='gray'/>
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
}


const styles = {};

styles.input = {
	marginTop: '60px'
}

styles.box = {
	display: 'flex',
	flexFlow: 'row',
	flexWrap: 'wrap',
	justifyContent: 'space-around',
	alignItems: 'center',
	marginTop: '20px'
}

styles.frame = {
	borderRadius: '1em'
}

styles.img = {
	borderRadius: '1em'
}

styles.title = {
	color: 'white',
	textAlign: 'center',
	fontSize: '18px'
}