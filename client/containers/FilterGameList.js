import {connect} from 'react-redux';
import {Games} from '../components/Games.js';
import {getGames} from '../actions.js';

const gameFilter = (games, keyWord) => (
	games.filter(game => game.name.includes(keyWord))
)

const mapStateToProps = state => {
	console.log(state)
	return {
		games: gameFilter(state.games, state.search)
	}
}

// const mapDispatchToProps = (dispatch) => ({
//   getGames
// })

const mapDispatchToProps = (dispatch) => ({
  getGames: () => {
    dispatch(getGames())
  }
})

const FilterGameList = connect(
	mapStateToProps,
	mapDispatchToProps
)(Games)

export default FilterGameList