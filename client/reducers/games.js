const games = (state = {
	isFetching: false,
	didInvalidate: false,
  	items: []
}, action) => {
	switch (action.type) {

		case 'REQUEST_GAMES':
			return {
				...state,
				isFetching: true,
				didInvalidate: false
			}

		case 'RECEIVE_GAMES':
			return {
				isFetching: false,
				didInvalidate: false,
				items: action.games,
				lastUpdated: action.receivedAt
			}
			
		default:
			return state
	}
}

export default games