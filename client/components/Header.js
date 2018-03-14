import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {authInfo, updateY} from '../actions';


const DropDown = ({logout, username}) => (
	<div className="btn-group">
		<div data-toggle="dropdown" style={styles.link}>
			<a href='#' style={styles.link}>{`Hi ${username}`}</a>
		</div>
		<ul className="dropdown-menu" style={styles.list}>
			<Link to="/" style={styles.link}><li>Collection</li></Link>
			<Link to="/" style={styles.link}><li>Manage</li></Link>
			<li className="divider"></li>
			<a href='#' style={styles.link} onClick={logout}><li>logout</li></a>
		</ul>
	</div>
)

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

	logout(event){
		event.preventDefault();
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
					<Link style={styles.link} to="/animes">ANIMES</Link>
				</div>
				<div>
					<Link style={styles.link} to="/reddits">SUBREDDITS</Link>
				</div>
				<div>
					<Link style={styles.link} to="/articles">ARTICLES</Link>
				</div>
				{
					auth.username  
					? (<DropDown logout={this.logout} username={auth.username} />)
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

styles.list = {
	boxShadow: 'none',
	borderStyle: 'none',
	background: 'rgba(20,20,20,0.4)',
	minWidth: '0px',
	left: '-30px'
}

styles.link = {
	textDecoration: 'none',
	color: 'white',
	fontSize: '130%',
	fontFamily: 'Hind Siliguri, sans-serif'
}