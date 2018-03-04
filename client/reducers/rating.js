const rating = (state = 5, action) => {
	switch (action.type) {
		case 'SET_RATING':
			return action.rating
		default:
			return state
	}
}

export default rating