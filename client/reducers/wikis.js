const wikis = (state = {
	isFetching: false,
	didInvalidate: false,
  	items: {}
}, action) => {
	switch (action.type) {
		case 'REQUEST_WIKI':
			return {
				...state,
				isFetching: true,
				didInvalidate: false
			}

		case 'RECEIVE_WIKI':
			return {
				isFetching: false,
				didInvalidate: false,
				items: {
					...state.items,
					[action.gameName]: action.wiki
				}
			}

		default:
			return state
	}
}

export default wikis