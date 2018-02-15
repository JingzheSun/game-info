import axios from 'axios';

const games = (state = [], action) => {
	switch (action.type) {
		case 'GET_GAMES':
			console.log('get')
			axios.get('/games')
			.then(res => {
				let {data} = res;
				console.log(data)
				return data
			})
			.catch(err => console.log(err))
		default:
			return state
	}
}

export default games