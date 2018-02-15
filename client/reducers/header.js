const header = (state = 0, action) => {
	switch (action.type) {
		case 'Y_CHANGE':
			return action.y
		default:
			return state
	}
}

export default header