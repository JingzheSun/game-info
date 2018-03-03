import axios from 'axios';


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
