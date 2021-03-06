var express = require('express');
var bodyParser = require('body-parser');
var Game = require('../schemas/game.js');
var Comment = require('../schemas/comment.js');

var gameRouter = express.Router();
gameRouter.use(bodyParser.json());

gameRouter.route('/')
.get((req, res, next) => {
	Game.find({})
	.populate({
	    path: 'comments',
	    populate: { path: 'author' }
	})
	.then(games => {
		res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(games);
	}, err => next(err))
	.catch(err => next(err));
})

gameRouter.route('/comments')
.post((req, res, next) => {
	if (!req.user){
		res.status(401).redirect('/auth');
	} else {
		let {author, comment, rating, gameId, route} = req.body;
		Comment.create({
			author,
		 	comment,
 			rating 
		})
		.then(c => {
			Game.update({_id: gameId}, 
				{ $push: { comments: c._id}},
				(err, data) => {
					console.log(err||data);
					res.redirect(route);
				}
			);
		})
		.catch(error => console.log(error))
	}
})
.patch((req, res, next) => {
	let {commentId, gameId} = req.body;
	
	Game.update({_id: gameId}, { $pull: { comments: commentId}})
	.then(r => console.log(r))
	.catch(err => console.log(err))

	Comment.remove({_id: commentId})
	.then(resp => console.log(resp))
	.catch(error => console.log(error))

	res.end('');
})


module.exports = gameRouter;