var Game = require('./schemas/game.js');
var User = require('./schemas/user.js');

User.find({}, (err, data) => {
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