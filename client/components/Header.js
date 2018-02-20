import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {authInfo} from '../actions';

export default class Header extends React.Component{

	static propTypes = {
	    dispatch: PropTypes.func,
	    y: PropTypes.number
	}

	constructor(props){
		super(props);
		this.logout = this::this.logout;
	}

	componentDidMount(){
		$(window).scroll(()=>{
			let y = window.scrollY;
			
			if(y < 50){
				$("#header").css({visibility: 'visible'});
				$('#header').removeClass('fixed-top');
				$("#header").css({opacity: 1});
			}else if (y < this.props.y){
				$("#header").css({visibility: 'visible'});
				$('#header').addClass('fixed-top');	
				$("#header").css({opacity: 1});
			}else{
				$("#header").css({opacity: 0});
				$("#header").css({visibility: 'hidden'})
			}	

			this.props.updateY();
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
			<header id='header' style={styles.box} className='fixed-top'>
				<Link to='/'>
					<img src="Ragnaros.png" style={styles.img}/>
				</Link>
				<div>
					<Link to='/'>Home</Link>
				</div>
				<div>
					<Link to='/r'>Overlord</Link>
				</div>
				{
					auth.username ? (<div onClick={this.logout}> Hi {auth.username}</div>)
									: (<div><Link to='/auth'>Login</Link></div>)

				}
				
			</header>
		)
	}
};

const styles = {};
styles.box = {
	background: 'rgba(111,111,111,0.3)',
	height: '40px',
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