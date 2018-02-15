import {connect} from 'react-redux';
import {updateY} from '../actions.js';
import Header from '../components/Header.js';

const mapStateToProps = state => ({
	y: state.header
});

const mapDispatchToProps = ({
	updateY
})

const HeaderStyle = connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)

export default HeaderStyle