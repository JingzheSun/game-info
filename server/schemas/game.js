var mongoose = require('mongoose');
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
	},
	comments: {
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Game', Game)