import axios from 'axios';


// fetch games from database
export const getGames = () => (dispatch, getState) => {
	dispatch(requestGames());
	return axios.get('/games')
		.then(res => {
			let {data} = res;
			dispatch(receiveGames(data));
		})
		.catch(err => console.log(err))
}
export const requestGames = () => ({
  	type: 'REQUEST_GAMES'
})
export const receiveGames = (games) => ({
  	type: 'RECEIVE_GAMES',
  	games,
  	receivedAt: Date.now()
})


//fetch wiki by api
export const getWiki = (gameName) => (dispatch, getState) => {
	dispatch(requestWiki());
	let url = `https://en.wikipedia.org/w/api.php?action=query&titles=${gameName}&prop=extracts&format=json&formatversion=2&origin=*&redirects=1&converttitles=1`
	let urlCN = `https://zh.wikipedia.org/w/api.php?action=query&titles=${gameName}&prop=extracts&format=json&formatversion=2&origin=*&redirects=1&converttitles=1`
	return axios.get(url)
		.then(res => {
			let {extract} = res.data.query.pages[0]
			extract ? dispatch(receiveWiki(extract, gameName))
			: axios.get(urlCN).then(res => {
				let {extract} = res.data.query.pages[0]
				dispatch(receiveWiki(extract, gameName));
			})
			.catch(err => console.log(err))
		})
		.catch(err => console.log(err))
}
export const requestWiki = () => ({
  	type: 'REQUEST_WIKI'
})
export const receiveWiki = (wiki, gameName) => ({
	type: 'RECEIVE_WIKI',
  	wiki,
  	gameName
})


// fetch Subreddits by api
export const getSubreddits = (subreddits) => (dispatch, getState) => {
	dispatch(requestSubreddits());
	let url = `https://www.reddit.com/r/${subreddits}.json`;
	return axios.get(url)
		.then(res => {
			let content = res.data.data.children;
			dispatch(receiveSubreddits(content, subreddits))
		})
		.catch(err => {
			alert("Subreddit doesn't exist");
			dispatch(deleteSubreddits(subreddits))
		})
}
export const requestSubreddits = () => ({
  	type: 'REQUEST_SUBREDDITS'
})
export const receiveSubreddits = (content, subreddits) => ({
	type: 'RECEIVE_SUBREDDITS',
  	content,
  	subreddits
})
export const addSubreddits = (subreddits) => ({
  	type: 'ADD_SUBREDDITS',
  	subreddits
})
export const changeSubreddits = (subreddits) => ({
	type: 'CHANGE_SUBREDDITS',
  	subreddits
})
export const deleteSubreddits = (subreddits) => ({
	type: 'DELETE_SUBREDDITS',
  	subreddits
})


// fetch games from database
export const getAnimeList = () => dispatch => {
	dispatch(requestAnimeList());
	let url = 'https://bangumi.bilibili.com/jsonp/season_rank_list/global/3.ver?callback=bangumiRankCallback';
	return axios.get(url)
		.then(res => {
			console.log(res)
			let {data} = res;
			//dispatch(receiveAnimeList(data));
		})
		.catch(err => console.log(err))
}
export const requestAnimeList = () => ({
  	type: 'REQUEST_ANIMELIST'
})
export const receiveAnimeList = (animeList) => ({
  	type: 'RECEIVE_ANIMELIST',
  	animeList
})