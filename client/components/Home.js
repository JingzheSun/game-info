import React from 'react';
import axios from 'axios';
import Swiper from 'react-id-swiper';
import {connect} from 'react-redux';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Games from '../containers/FilterGameList.js';
import {getAnimeList} from '../actions';

const params = {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
};

class Slide extends React.Component {
	render() {
		let {games} = this.props;
		if (games.items.length){
			let images = games.items.map(g => ({
				url: g.image,
				name: g.name
			}));
			return (
				<div style={styles.slide}>
					<Swiper {...params}>
					{
						images.map((g, i) => (
							<div key={i}>
								<Link to={`/games/${g.name}`}>
									<img src={g.url} style={styles.pic}/>
								</Link>
							</div>
						))
					}
					</Swiper>
				</div>
			)
		} else {
			return <div></div>
		}
		
	}
}

class AnimeList extends React.Component{
	constructor(props){
		super(props);
		props.dispatch(getAnimeList())
	}

	render(){
		return (
			<div style={styles.animeList}>
				<h2 style={{marginLeft:'20px'}}>Anime</h2>
				<hr />
				<div>
					{
						this.props.animeList.items.map((info,i) => (
							<a key={i} href={`https://bangumi.bilibili.com/anime/${info.season_id}`} style={styles.animeLink}>
								<div className='animeListBox'>
									<img src={info.square_cover} style={styles.animeImg}/>
									<p style={styles.animeInfo}>{info.title}</p> 
								</div>
							</a>
						))
					}
				</div>
			</div>
		)
	}
}

AnimeList = connect()(AnimeList)

class Home extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div style={styles.box}>
				<Slide games={this.props.games}/>
				<Games/>
				<AnimeList animeList={this.props.anime.animeList}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	let {games, anime} = state;
	return {games, anime}
}

export default connect(
	mapStateToProps
)(Home)

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


const styles = {}

styles.box = {
	display: 'flex',
	flexFlow: 'row',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	padding: '0 20px',
	marginTop: '10px'
}

styles.slide = {
	background: 'rgba(100,100,100,0.44)',
	height: '75%',
	width: '90%',
	margin: '50px auto'
}

styles.pic = {
	height:'100%',
	width: '100%',
	objectFit: 'contain'
}

styles.animeList = {
	color: 'white',
	padding: '5px',
	width: '28%',
	fontSize: '17px',
	background: 'rgba(100,100,100,0.34)'
}

styles.animeLink = {
	textDecoration: 'none',
	color: 'lightblue'
}

styles.animeImg = {
	display: 'inline-block',
	maxHeight: '65px', 
	borderRadius: '0.3em'
}

styles.animeInfo = {
	marginLeft:'10px',
	display: 'inline-block'
}