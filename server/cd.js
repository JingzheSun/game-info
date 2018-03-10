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

// Game.update({name: '侠客风云传'}, { $set: { image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520665328113&di=071d4e35d5a3994f2ffcaeb8c978149a&imgtype=0&src=http%3A%2F%2Fimg.3dmgame.com%2Fuploads%2Fallimg%2F160928%2F316-16092Q44636.jpg'}},
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
// 	name: "轩辕剑",
// 	description: "Bell, Sword, Axe, Kettle, Tower, Lyre, Mirror, Tripod, Seal, Stone",
// 	category: ['Series', 'RPG'],
// 	image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3736497663,1120410685&fm=27&gp=0.jpg'
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