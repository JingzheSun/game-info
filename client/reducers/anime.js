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

		case 'REQUEST_ANIMEFULLLIST':
			return {
				...state,
				animeFullList:{
					...state.animeFullList,
					isFetching: true,
					didInvalidate: false
				}
			}

		case 'RECEIVE_ANIMEFULLLIST':
			return {
				...state,
				animeFullList: {
					...state.animeFullList,
					isFetching: false,
					didInvalidate: false,
					items: action.animeFullList
				}
			}
			
		default:
			return state
	}
}

export default anime