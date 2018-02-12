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
// 	name: "Ori and the Blind Forest",
// 	description: "When I lit the skies ablaze. I called out to Ori.",
// 	category: ["2D", 'Story', 'Action'],
// 	image: 'https://cdna.artstation.com/p/assets/images/images/000/548/770/20150316130556/smaller_square/johannes-figlhuber-eb72d79135ad065c5bfa9e40c7bce92b-d7mlqu8.jpg?1443932215'
// });

// game.save((err, res) => {
// 	if (err) {
// 		console.log(err.errmsg);
// 	}
// 	else {
// 		console.log("Res:" + res);
// 	}
// });