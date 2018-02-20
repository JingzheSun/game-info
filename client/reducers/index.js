import { combineReducers } from 'redux';
import games from './games.js';
import search from './search.js';
import header from './header.js';
import authError from './authError.js';

const gameApp = combineReducers({
	games,
	search,
	header,
	authError
})

export default gameApp