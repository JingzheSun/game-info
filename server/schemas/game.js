var mongoose = require('../database_connect.js');
var Comment = require('./comment.js');
var Schema = mongoose.Schema;

var Game = new Schema({
	name: {
		type: String,
		require: true,
		unique: true
	},
	description: {
		type: String,
		require: true
	},
	image: {
		type: String,
		require: false
	},
	category: {
		type: Array,
		require: false
	}
	//comments: [Comment]
}, {timestamps: true});

module.exports = mongoose.model('Game', Game)