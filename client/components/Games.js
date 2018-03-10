import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {updateKeyWord, getGames} from '../actions'


let SearchBox = ({dispatch}) => {
	let input;

	return (
		<div >
			<img src='/Zb.png' style={{height: '90px', display: 'inline'}} />
			<input type='text' 
				id = 'gameFilter' 
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
			<img src='/Zb.png' style={{height: '90px', display: 'inline', transform: 'rotateY(180deg)'}} />
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

	componentWillMount() {
    	const { dispatch } = this.props
    	dispatch(getGames())
  	}

	render(){ 
		let {games} = this.props;
		return (
			<div style={styles.games}>
				<h2 style={{marginLeft:'20px'}}>Games</h2>
				<hr />
				<SearchBox />
				<div style={styles.box}>
					{
						games.map((info, i) =>(
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
	fontSize: '18px',
	fontFamily: 'Mina, sans-serif'
}

styles.games = {
	width: '70%',
	background: 'rgba(100,100,100,0.34)',
	color: 'white',
	padding: '5px'
}