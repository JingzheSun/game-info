import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAnimeFullList} from '../actions'


class Animes extends React.Component{
	constructor(props){
		super(props);

		props.dispatch(getAnimeFullList())
	}

	render(){ 
		let {animes} = this.props;
		return (
			<div style={styles.body} className='container'>
				<h1 style={{marginLeft:'20px'}}>Animes</h1>
				<hr />
				<div style={styles.box}>
					{
						animes.map((info, i) =>(
							<div key={i} className='animeBox'>
								<a href={`https://bangumi.bilibili.com/anime/${info.season_id}`} style={styles.animeLink}>
									<img src={info.cover} style={styles.img}/>
									<h5 style={styles.title}>{info.title}</h5>
								</a>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	let {anime} = state;
	return {animes: anime.animeFullList.items}
}

export default connect(mapStateToProps)(Animes);

const styles = {};

styles.box = {
	display: 'flex',
	flexFlow: 'row',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	alignItems: 'center',
}

styles.body = {
	color: 'white',
	marginTop: '50px'
}

styles.animeLink = {
	textDecoration: 'none',
	color: 'lightblue'
}

styles.img = {
	maxHeight: '280px',
	borderRadius: '0.3em'
}

styles.title = {
	textAlign: 'center',
	maxWidth: '210px',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap'
}