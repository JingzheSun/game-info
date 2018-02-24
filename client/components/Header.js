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
	}

	componentDidMount(){
		$(window).scroll(()=>{
			let y = window.scrollY;
			if(y == 0){
				$("#header").css({visibility: 'visible'});
				$("#header").css({opacity: 1});
				$("#header").css({height: '50px'});
			}else if (y < this.props.y){
				$("#header").css({visibility: 'visible'});
				$("#header").css({opacity: 1});
			}else{
				$("#header").css({height: '40px'});
				$("#header").css({opacity: 0});
				$("#header").css({visibility: 'hidden'})
			}	
			this.props.dispatch(updateY());
		})
		this.OAuth()
	}

	OAuth(){
  		axios.get('auth/user')
		.then(res => {
			this.props.dispatch(authInfo(res.data))
		})
		.catch(err => {
			console.log(err)
		})	
  	}

	logout(){
		axios.post('/auth/logout',{})
		.then(res => {
			this.props.dispatch(authInfo(''))
			this.props.history.push('/r')
		})
		.catch(err => console.log(err.response))
	}

	render(){
		let {auth} = this.props
		return (
			<div id='header' style={styles.box}>
				<Link to='/'>
					<img src="Ragnaros.png" style={styles.img}/>
				</Link>
				<div>
					<Link to='/'>Home</Link>
				</div>
				<div>
					<Link to={{
			            	pathname: "/r/r",
			            	state: { from: 'fwerhtujyk' }
			        	}}>Overlord
			        </Link>
				</div>
				{
					auth.username || auth.facebookId
					? (<div onClick={this.logout}> Hi {auth.username || auth.facebookId}</div>)
					: (<div><Link to='/auth'>Login</Link></div>)
				}
				
			</div>
		)
	}
};

const styles = {};
styles.box = {
	background: 'rgba(111,111,111,0.3)',
	height: '40px',
	position: 'fixed',
	top: 0,
	right: 0,
  	left: 0,
  	zIndex: 1030,
	color: 'white',
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