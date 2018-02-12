var express = require('express');
var bodyParser = require('body-parser');
var Game = require('../schemas/game.js');

var gameRouter = express.Router();
gameRouter.use(bodyParser.json());

gameRouter.route('/')
.get((req, res, next) => {
	Game.find({}).then(games => {
		res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(games);
	}, err => next(err))
	.catch(err => next(err));
})

module.exports = gameRouter;