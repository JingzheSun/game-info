import React from 'react';
import { changeSubreddits, getSubreddits, addSubreddits, deleteSubreddits} from '../actions';

export default class Subreddits extends React.Component{

	constructor(props){
		super(props);

		this.init = this.init.bind(this);
		this.select = this.select.bind(this);
		this.add = this.add.bind(this);
		this.manage = this.manage.bind(this);
		this.del = this.del.bind(this);

		this.init();
	}

	init(){
		let {dispatch, subreddits} = this.props;

		for(let t of subreddits.topics){
			dispatch(getSubreddits(t))
		}
	}

	manage(){
		$("#myModalLabel").text("Manage");
     	$('#myModal').modal();
	}

	add(event){
		let {dispatch, subreddits} = this.props;

		if(event.key == "Enter"){
			let newTopic = event.target.value;
			if (subreddits.topics.includes(newTopic.toLowerCase())){
				alert('Subreddit already added');
				return
			}
			dispatch(addSubreddits(newTopic))	
			dispatch(getSubreddits(newTopic))			
		}
	}

	del(topic, event){
		let {dispatch} = this.props;
		dispatch(deleteSubreddits(topic));
	}

	select(event){
		let {dispatch} = this.props;
		dispatch(changeSubreddits(event.target.value))
	}

	componentDidUpdate() {
		$('.selectpicker').selectpicker('refresh');
	}

	render(){
		let {subreddits} = this.props
		let {show, topics} = subreddits;
		let list = subreddits.data[show] || [];
		return(
			<div id="home" style={styles.block}>

				<div className="container">
					<h1 onClick={this.manage} style={styles.manage}>Subreddits</h1>
					<select className="selectpicker" data-live-search="true" onChange={this.select}>
						{
							topics.map((name, i) => (
								<option data-tokens={name.split(' ')} key={i}>{name}</option>
							))
						}
					</select>
					<hr />
					<div id="subreddit">
						{
							list.map((info, i) => (
								<POSTS key={i} info={info}/>
							))
						}
					</div>
				</div>

				<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
		            <div className="modal-dialog" role="document">
		                <div className="modal-content">
		                    <div className="modal-header">
		                    	<h2>Manage Subreddits</h2>
		                    </div>
		                    <div className="modal-body">
		                        <div className="form-group">
		                        	<input className="form-control" placeholder="Type in a topic and press Enter to add" onKeyDown={this.add}/>
		                        	{
		                        		topics.map((title, i) => (
		                        			<div style={styles.del} key={i}>
		                        				{title}
		                        				<i onClick={this.del.bind(this, title)} className="fa fa-times pull-right" aria-hidden="true"></i>
		                        			</div>
		                        		))
		                        	}
		                        </div>		                 
		                    </div>
			            </div>
		            </div>
		     	</div>

			</div>
		)
	}
}

const POSTS = ({info}) => (
	<div style={styles.posts}>
		<a href={'https://www.reddit.com' + info.data.permalink}>
			<h3>{info.data.title}</h3>
		</a>
		by {info.data.author}
	</div>
)

const styles = {}

styles.posts = {
	background: 'rgba(40,40,40,0.25)',
	borderRadius: '1em',
	textAlign: 'left',
	border: '1px solid lightblue',
	padding: '10px',	
	margin: '5px',
	color: 'white'
}

styles.manage = {
	cursor: 'pointer',
	textDecoration: 'underline',
	color: 'white'
}

styles.del = {
	borderRadius: '0.5em',
	border: '1px solid balck',
	background: 'rgba(40,40,40,0.15)',
	fontSize: '25px',
	margin: '5px',
	pedding: '5px'
}

styles.block = {
	textAlign: 'center',
	marginTop: '60px'
}