import {connect} from 'react-redux';
import {Games} from '../components/Games.js';
import {getGames} from '../actions.js';

const gameFilter = (games, keyWord) => (
	games.filter(game => 
		game.name.toLowerCase().includes(keyWord.toLowerCase())
	)
)

const mapStateToProps = state => {
	const { games, search } = state
	const {
		isFetching,
		lastUpdated,
		items
	} = games || {isFetching: true, items: []}
	
	return {
		games: gameFilter(items, search)
	}
}

// const mapDispatchToProps = (dispatch) => ({
//   getGames
// })


const FilterGameList = connect(
	mapStateToProps
)(Games)

export default FilterGameList