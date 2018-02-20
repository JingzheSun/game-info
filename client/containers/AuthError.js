import {connect} from 'react-redux';
import Auth from '../components/Auth.js';

const mapStateToProps = state => (state.authError)


const AuthError = connect(
	mapStateToProps
)(Auth)

export default AuthError