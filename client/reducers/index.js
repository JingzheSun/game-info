import { combineReducers } from 'redux';
import games from './games.js';
import search from './search.js';
import header from './header.js';
import authError from './authError.js';
import authInfo from './authInfo.js';
import wikis from './wikis.js';
import rating from './rating.js';
import subreddits from './subreddits.js'
import anime from './anime.js'


const gameApp = combineReducers({
	games,
	search,
	header,
	authError,
	authInfo,
	wikis,
	rating,
	subreddits,
	anime
})

export default gameApp