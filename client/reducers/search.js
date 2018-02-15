const search = (state = '', action) => {
	switch (action.type) {
		case 'SET_KEYWORD':
		console.log('d')
			return action.keyWord
		default:
			return state
	}
}

export default search