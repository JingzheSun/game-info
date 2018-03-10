const anime = (state = {
	animeList: {
		isFetching: false,
		didInvalidate: false,
	  	items: []
	},
	animeFullList: {
		isFetching: false,
		didInvalidate: false,
	  	items: []
	}
}, action) => {
	switch (action.type) {

		case 'REQUEST_ANIMELIST':
			return {
				...state,
				animeList:{
					...state.animeList,
					isFetching: true,
					didInvalidate: false
				}
			}

		case 'RECEIVE_ANIMELIST':
			return {
				...state,
				animeList: {
					...state.animeList,
					isFetching: false,
					didInvalidate: false,
					items: action.animeList
				}
			}
		default:
			return state
	}
}

export default games