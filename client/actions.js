import axios from 'axios';

export const updateY = () => ({
	type: 'Y_CHANGE',
	y: window.scrollY
})

export const updateKeyWord = (keyWord) => ({
	type: 'SET_KEYWORD',
	keyWord
})

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

export const loginError =  (msg) => ({
	type: 'LOGIN_ERROR',
	msg
})

export const registerError = (msg) => ({
	type: 'REGISTER_ERROR',
	msg
})

export const authInfo = (info) => ({
	type: 'AUTHENTICATION_INFORMATION',
	info
})