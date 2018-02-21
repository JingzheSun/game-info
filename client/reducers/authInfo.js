const authError = (state = {username: '', admin: false} , action) => {
	switch (action.type) {
		case 'AUTHENTICATION_INFORMATION':
			return {
				username: action.username,
				admin: false
			}

		default:
			return state
	}
}

export default authError