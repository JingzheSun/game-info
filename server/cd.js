var Game = require('./schemas/game.js');
var User = require('./schemas/user.js');
var Comment = require('./schemas/comment.js');


Game.find({}, (err, data) => {
	console.log(err || data);
});

// Comment.find({}, (error, arr) => {
// 	console.log(error || arr);
// 	let tmp = arr.map(a => a._id)
// 	console.log(tmp)
// 	Game.update({name: 'Diablo'}, { $push: { comments: tmp[1]}},
// 		(err, data) => {
// 		console.log(data)
// 	});	
// });

// Game.update({name: 'Blade and Soul'}, { $set: { name: '剑灵'}},
// 	(err, data) => {
// 	console.log(data)
// });	

// Comment.remove({}, function(err, res){
//     if (err) {
//         console.log("Error:" + err);
//     }
//     else {
//         console.log("Res:" + res);
//     }
// })



// var game = new Game({
// 	name: "Blade & Soul",
// 	description: "Path, Desires, Revenge, Sword, Flower, Dream, Time, Sky, Moon, Sin, Punishiment, Soul, God",
// 	category: ['Koera', 'MMORPG', 'Action'],
// 	image: 'https://cdn.wallpapersafari.com/59/59/m6L0ax.jpg'
// });

// game.save((err, res) => {
// 	if (err) {
// 		console.log(err.errmsg);
// 	}
// 	else {
// 		console.log("Res:" + res);
// 	}
// });


// var comment = new Comment({
// 	author: "whoever",
// 	comment: "Belne",
// 	rating: 8 
// });

// comment.save((err, res) => {
// 	if (err) {
// 		console.log(err.errmsg);
// 	}
// 	else {
// 		console.log(res);
// 	}
// });