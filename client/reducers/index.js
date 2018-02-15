import { combineReducers } from 'redux';
import games from './games.js';
import search from './search.js';
import header from './header.js';

const gameApp = combineReducers({
	games,
	search,
	header
})

export default gameApp