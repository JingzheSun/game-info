import React from 'react';
import {HashRouter, BrowserRouter, Route, Switch, Link} from 'react-router-dom';

export default class Header extends React.Component{

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

	render(){
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