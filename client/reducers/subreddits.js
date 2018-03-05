const subreddits = (state = {
	isFetching: false,
	didInvalidate: false,
  	data: {},
  	topics: ['python', 'diablo'],
  	show: 'python'
}, action) => {
	switch (action.type) {
		case 'REQUEST_SUBREDDITS':
			return {
				...state,
				isFetching: true,
				didInvalidate: false
			}

		case 'RECEIVE_SUBREDDITS':
			return {
				...state,
				isFetching: false,
				didInvalidate: false,
				data: {
					...state.data,
					[action.subreddits]: action.content
				}
			}
		case 'ADD_SUBREDDITS':
			return {
				...state,
				topics: [
					...state.topics,
					action.subreddits
				]
			}
		case 'CHANGE_SUBREDDITS':
			return {
				...state,
				show: action.subreddits
			}
		case 'DELETE_SUBREDDITS':
			let i = state.topics.indexOf(action.subreddits);
			return {
				...state,
				topics: state.topics.filter(r => r !== action.subreddits),
				show: state.topics[i+1] || ''
			}

		default:
			return state
	}
}

export default subreddits