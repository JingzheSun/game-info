import React from 'react';
import axios from 'axios';
import Swiper from 'react-id-swiper';
import {connect} from 'react-redux';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Game from '../containers/FilterGameList.js';

const params = {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
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
			let images = games.items.map(g => g.image);
			return (
				<Swiper {...params}>
				{
					images.map((url, i) => (
						<div key={i} style={styles.frame}>
							<img src={url} style={styles.pic}/>
						</div>
					))
				}
				</Swiper>
			)
		} else {
			return <div></div>
		}
		
	}
}
const List = () => (
	<ul style={styles.pic1}>
		{
			fontFamily.map((f,i) => (
				<li style={{fontFamily: f}} key={i}>
					HA,ha,hia
				</li>
			))
		}
	</ul>
)

class Home extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div style={styles.box}>
				<Slide games={this.props.games}/>
				<Game/>
				<List/>
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
	padding: '0 20px'
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
	maxHeight:'105%',
	maxWidth: '100%'
}

styles.pic1 = {
	height:'700px',
	width: '23%',
	color: 'white'
}