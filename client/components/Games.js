import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {updateKeyWord, getGames} from '../actions'


let SearchBox = ({dispatch}) => {
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
			<div style={styles.games}>
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

const fontFamily = [
	'Hind Siliguri, sans-serif',
	'Mina, sans-serif',
	'Raleway, sans-serif',
	'Indie Flower, cursive',
	'Acme, sans-serif',
	'Nunito, sans-serif',
	'Dancing Script, cursive',
	'Berkshire Swash, cursive',
	'Orbitron, sans-serif',
	'Tangerine, cursive',
	'Audiowide, cursive',
	'VT323, monospace',
	'Special Elite, cursive',
	'Marck Script, cursive',
	'Cinzel Decorative, cursive',
	'Playfair Display SC, serif'
]

const styles = {};

styles.input = {
	maxWidth: '70%'
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
	fontSize: '18px',
	fontFamily: 'Mina, sans-serif'
}

styles.games = {
	width: '75%'
}