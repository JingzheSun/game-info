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
// 	name: "Nier: Automata",
// 	description: "For glory of mankind, All to be nice",
// 	category: ['Japan', '2B', 'Action'],
// 	image: 'https://www.meups4.com.br/wp-content/uploads/2017/03/Nier_Automata_2B_9S_A2.jpg'
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