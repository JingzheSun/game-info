import {connect} from 'react-redux';
import {Games} from '../components/Games.js';
import fsm from 'fuzzy-string-matching';
//import pinyin from 'pinyin';

const gameFilter = (games, keyWord) => (
	games.filter(game => {
		let key = keyWord.toLowerCase();
		let name = game.name.toLowerCase();
		let des = game.description.toLowerCase();
		let cate = [
			...game.category.map(c => c.toLowerCase()),
			name,
			des
		]
		return cate.some(c => c.includes(key) || fsm(c, key) > 0.3)
	})
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