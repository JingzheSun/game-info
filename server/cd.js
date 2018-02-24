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

/*User.remove({}, function(err, res){
    if (err) {
        console.log("Error:" + err);
    }
    else {
        console.log("Res:" + res);
    }
})*/

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