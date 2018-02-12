import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Games extends React.Component{
	constructor(props){
		super(props);
		this.state={
			keyWord: null,
			games: []
		}

		this.search = this.search.bind(this);
	}

	componentDidMount(){
		axios.get('/games')
		.then(res => {
			let {data} = res;
			this.setState(prev => {
				prev.games = data;
				return prev;
			});
		})
		.catch(err => console.log(err))
	}

	search(event){
		let v = event.target.value;
		this.setState(prev => {
			prev.keyWord = v;
			return prev;
		})
	}

	render(){ 
		console.log(this.state.games)
		return (
			<div>
				<input type='text' className='form-control' onChange={this.search} style={styles.input}/>
				<div className='container' style={styles.box}>
					{
						this.state.games.map((info, i) => (
							<div key={i}>
								<Link to={`/games/${info.name}`}>
									<img src={info.image} style={{height:'200px'}}/>
									<div style={styles.title}>
										{info.name}
									</div>
								</Link>
							</div>
						))
					}
				</div>
			</div>
		)
	}
};



const styles = {};

styles.input = {
	marginTop: '50px'
}

styles.box = {
	display: 'flex',
	flexFlow: 'row',
	flexWrap: 'wrap',
	justifyContent: 'space-around',
	alignItems: 'center' 
}

styles.img = {
	border: '2px',
	borderRadius: '1em',
	height: '100%'
}

styles.title = {
	color: 'white',
	textAlign: 'center',
	fontSize: '20px'
}