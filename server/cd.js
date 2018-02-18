var Game = require('./schemas/game.js');
//var Image = require('./schemas/image.js');

Game.find({}, (err, data) => {
	console.log(err || data)
});

/*User.remove({}, function(err, res){
    if (err) {
        console.log("Error:" + err);
    }
    else {
        console.log("Res:" + res);
    }
})*/

// var game = new Game({
// 	name: "Pal",
// 	description: "逍遥",
// 	category: ['Relax', 'Pal'],
// 	image: 'http://i.imgur.com/Zxu3j0T.jpg'
// });

// game.save((err, res) => {
// 	if (err) {
// 		console.log(err.errmsg);
// 	}
// 	else {
// 		console.log("Res:" + res);
// 	}
// });