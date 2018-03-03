export const loginError =  (msg) => ({
	type: 'LOGIN_ERROR',
	msg
})

export const registerError = (msg) => ({
	type: 'REGISTER_ERROR',
	msg
})

export const authInfo = (info, id) => ({
	type: 'AUTHENTICATION_INFORMATION',
	username: info,
	id: id
})

