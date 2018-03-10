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
							<div key={i} style={styles.frame}>
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
		console.log(props)
		props.dispatch(getAnimeList())
	}

	render(){
		return (
			<ul style={styles.list}>
				{
					fontFamily.map((f,i) => (
						<li style={{fontFamily: f}} key={i}>
							HA,ha,hia
						</li>
					))
				}
			</ul>
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
				<AnimeList/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	let {games} = state;
	return {games}
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
	height: '65%',
	width: '90%',
	margin: '50px auto'
}

styles.frame = {
	display: 'flex',
	flexFlow: 'row',
	flexWrap: 'nowrap',
	justifyContent: 'space-around',
	alignItems: 'center',
	padding: '0 20px'
}

styles.pic = {
	maxHeight:'100%',
	maxWidth: '100%'
}

styles.list = {
	height:'700px',
	width: '28%',
	color: 'white'
}