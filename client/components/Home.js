import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Game from '../containers/FilterGameList.js';


class Home extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div style={styles.box}>
				<Slide/>
				<Game/>
				<List/>
			</div>
		)
	}
}

const Slide = () => <img src='/Ragnaros.png' style={styles.pic} className='col-lg-12 col-md-12 col-sm-12 col-xs-12'/>
const List = () => <img src='/Ragnaros.png' style={styles.pic1}/>

const mapStateToProps = state => {
	return state
}

export default connect(
	mapStateToProps
)(Home)

const styles = {}

styles.box = {
	display: 'flex',
	flexFlow: 'row',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	padding: '0 20px'
}

styles.pic = {
	height:'400px',
	width: '100%',
	margin: '60px 0'
}

styles.pic1 = {
	height:'400px',
	width: '23%'
}