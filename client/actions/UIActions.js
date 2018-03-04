export const updateY = () => ({
	type: 'Y_CHANGE',
	y: window.scrollY
})

export const updateKeyWord = (keyWord) => ({
	type: 'SET_KEYWORD',
	keyWord
})

export const setStars = (rating) => ({
	type: 'SET_RATING',
	rating
})
