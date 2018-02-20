const authError = (state = {username: '', admin: false} , action) => {
	switch (action.type) {
		case 'AUTHENTICATION_INFORMATION':
			return action.info

		default:
			return state
	}
}

export default authError