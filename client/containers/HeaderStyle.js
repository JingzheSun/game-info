import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Header from '../components/Header.js';

const mapStateToProps = state => ({
	y: state.header,
	auth: state.authInfo
});

const HeaderStyle = withRouter(
	connect(
		mapStateToProps,
	)(Header)
)

export default HeaderStyle