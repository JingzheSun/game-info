var express = require('express');
var bodyParser = require('body-parser');
var User = require('../schemas/user.js');
var passport = require('passport');
//var authenticate = require('../authenticate.js');
var authRouter = express.Router();
authRouter.use(bodyParser.json());

authRouter.route('/register')
.post((req, res, next) => {
	User.register(new User({username: req.body.username}), req.body.password, 
		(err, user) => { 
			if (err) { 
				return res.status(406).end(err.message) 
			}
			passport.authenticate('local')(req, res, () => { 
				res.status(200).send(req.user)
			})
		}
	)
})

authRouter.route('/login')
.post(passport.authenticate('local'), (req, res, next) => {
	res.status(200).send(req.user)
})


module.exports = authRouter;