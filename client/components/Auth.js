import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {loginError, registerError, authInfo} from '../actions';

export default class Auth extends React.Component{

	static propTypes = {
	    login: PropTypes.string,
	    register: PropTypes.string
	}

	constructor(props){
		super(props);
		this.auth = this.auth.bind(this);
	}

  	auth(event){
  		event.preventDefault()

  		let requestUrl;
  		let error;
  		let username;
  		let password
  		if (event.target.value == 'Sign in'){
  			requestUrl = 'auth/login';
  			error = loginError;
  			username = this.loginUsername.value;
  			password = this.loginPassword.value;
  		} else {
  			requestUrl = 'auth/register';
  			error = registerError;
  			username = this.registerUsername.value;
  			password = this.registerPassword.value;
  		}

		axios.post(requestUrl,{username, password})
		.then(res => {
			this.props.dispatch(authInfo(res.data))
			this.props.dispatch(error(''))
			this.props.history.push('/')
		})
		.catch(err => {
			if(err.response.data){
				this.props.dispatch(error(err.response.data))
			}
		})	
  	}

  	

	render(){ 
		let {login, register} = this.props;
		return (
			<div style={styles.box}>
				<div style={{marginTop: '20%'}}>	
					<form method='POST' action='/auth/login'>
						<span>Login</span><br/>
						<span style={styles.err}>{login}</span><br/>
						<input type='text' placeholder='username' className='form-control' ref={node => {this.loginUsername = node}}/>
						<br />
						<input type='password' className='form-control' placeholder='password' ref={node => {this.loginPassword = node}}/>
						<br/>
						<input value="Sign in" type="submit" className="btn btn-primary" onClick={this.auth}/>
					</form>

					<span style={{marginRight: '20px'}}>
						<a href='/auth/twitter'><i className="fab fa-twitter-square"></i></a>
					</span>
					<span>
						<a href='/auth/facebook'><i className="fab fa-facebook"></i></a>
					</span>
				</div>

				<hr style={styles.hr}></hr>

				<div >	
					<form method='POST' action='/auth/register'>
						<span>New user</span><br/>
						<span style={styles.err}>{register}</span><br/>
						<input type='text' placeholder='username' className='form-control' ref={node => {this.registerUsername = node}}/>
						<br />
						<input type='password' className='form-control' placeholder='password' ref={node => {this.registerPassword = node}}/>
						<br/>
						<input value='Sign up' type="submit" className="btn btn-success" onClick={this.auth}/>
					</form>
				</div>	
			</div>
		)
	}
}


const styles = {};

styles.box = {
	color: 'white',
	fontSize: '22px',
	display: 'flex',
	flexFlow: 'row',
	flexWrap: 'nowrap',
	justifyContent: 'space-around',
	alignItems: 'baseline',
	height: '100%'
}

styles.hr = {
	background: 'white',
	width:'1px',
	height:'70%', 
	margin: '10px',
	flexBasis: '1px',
	alignSelf: 'center'
}

styles.err ={
	color: 'red'
}