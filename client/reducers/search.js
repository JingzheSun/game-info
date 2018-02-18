const search = (state = '', action) => {
	switch (action.type) {
		case 'SET_KEYWORD':
			return action.keyWord
		default:
			return state
	}
}

export default search