import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {authInfo, updateY} from '../actions';

export default class Header extends React.Component{

	static propTypes = {
	    dispatch: PropTypes.func,
	    y: PropTypes.number
	}

	constructor(props){
		super(props);
		this.logout = this::this.logout;
		this.OAuth = this::this.OAuth;
		this.OAuth()
	}

	componentDidMount(){
		$(window).scroll(()=>{
			let y = window.scrollY;
			if(y == 0){
				$("#header").css({visibility: 'visible'});
				$("#header").css({opacity: 1});
				$("#header").css({height: '50px', background: 'rgba(1,1,1,0.1)', fontSize: '130%'});
			}else if (y < this.props.y){
				$("#header").css({visibility: 'visible'});
				$("#header").css({opacity: 1});
			}else{
				$("#header").css({height: '40px', background: 'rgba(1,1,1,0.5)', fontSize: '100%'});
				$("#header").css({opacity: 0});
				$("#header").css({visibility: 'hidden'})
			}	
			this.props.dispatch(updateY());
		})
	}

	OAuth(){
  		axios.get('auth/user')
		.then(res => {
			let {username, id} = res.data || {username: '', id: ''};
			this.props.dispatch(authInfo(username, id))
		})
		.catch(err => {
			console.log(err)
		})	
  	}

	logout(){
		axios.post('/auth/logout',{})
		.then(res => {
			this.props.dispatch(authInfo(''))
			this.props.history.push('/')
		})
		.catch(err => console.log(err.response))
	}

	render(){
		let {auth} = this.props
		return (
			<header id='header' style={styles.box}>
				<div>
					<Link style={styles.link} to="/">HOME</Link>
				</div>
				<div>
					<Link style={styles.link} to="/reddits">SUBREDDITS</Link>
				</div>
				<div>
					<Link style={styles.link} to="/animes">ANIMES</Link>
				</div>
				<div>
					<Link style={styles.link} to="/articles">ARTICLES</Link>
				</div>
				{
					auth.username
					? 	(
							<button onClick={this.logout} className='btn btn-danger'> 
								Hi {auth.username}
							</button>
						)
					: (<div><Link style={styles.link} to='/auth'>LOGIN</Link></div>)
				}
				
			</header>
		)
	}
};

const styles = {};
styles.box = {
	background: 'rgba(1,1,1,0)',
	height: '50px',
	fontSize: '100%',
	position: 'fixed',
	top: 0,
	right: 0,
  	left: 0,
  	zIndex: 1030,
	display: 'flex',
	flexFlow: 'row',
	flexWrap: 'nowrap',
	justifyContent: 'space-around',
	alignItems: 'center'
}

styles.img = {
	border: '2px',
	borderRadius: '1em',
	height: '100%'
}

styles.link = {
	textDecoration: 'none',
	color: 'white',
	fontSize: '130%',
	fontFamily: 'Hind Siliguri, sans-serif'
}