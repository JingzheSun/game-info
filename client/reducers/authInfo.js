const authError = (state = {username: '', id: '', admin: false} , action) => {
	switch (action.type) {
		case 'AUTHENTICATION_INFORMATION':
			return {
				username: action.username,
				id: action.id,
				admin: false
			}

		default:
			return state
	}
}

export default authError