import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {updateY} from '../actions.js';
import Header from '../components/Header.js';

const mapStateToProps = state => ({
	y: state.header,
	auth: state.authInfo
});

const mapDispatchToProps = (dispatch, getState) => {
	return {updateY, dispatch}
}

const HeaderStyle = withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Header)
)

export default HeaderStyle