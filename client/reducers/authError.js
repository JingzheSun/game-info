const authError = (state = {login: '', register:''} , action) => {
	switch (action.type) {
		case 'LOGIN_ERROR':
			return {
				login: action.msg,
				register: ''
			}

		case 'REGISTER_ERROR':
			return {
				login: '',
				register: action.msg
			}
		default:
			return state
	}
}

export default authError