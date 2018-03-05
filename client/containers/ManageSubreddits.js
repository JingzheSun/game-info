import {connect} from 'react-redux';
import Subreddits from '../components/Subreddits.js';


const mapStateToProps = state => {
	const { subreddits } = state
	 
	return { subreddits }
}

const ManageSubreddits = connect(
	mapStateToProps
)(Subreddits)

export default ManageSubreddits