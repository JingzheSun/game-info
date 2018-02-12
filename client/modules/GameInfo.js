import React from 'react';

export default class GameInfo extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		console.log(this.props)
		// axios.get('/games')
		// .then(res => {
		// 	let {data} = res;
		// 	this.setState(prev => {
		// 		prev.games = data;
		// 		return prev;
		// 	});
		// })
		// .catch(err => console.log(err))
	}

	render(){
		return (
			<p>xas</p>
		)
	}

};