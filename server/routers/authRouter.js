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

authRouter.route('/logout')
.post((req, res, next) => {
	req.logout();
	res.status(200).send('success');
})

authRouter.route('/facebook')
.get(passport.authenticate('facebook'),(req, res)=>console.log(res))

authRouter.route('/facebook/callback')
.get(passport.authenticate('facebook', { failureRedirect: '/auth' }),
	(req, res, next) => {
    	// Successful authentication, redirect home.
    	res.status(200).redirect('/');
  	}	
)

authRouter.route('/twitter')
.get(passport.authenticate('facebook'),(req, res)=>console.log(res))

authRouter.route('/twitter/callback')
.get(passport.authenticate('facebook', { failureRedirect: '/auth' }),
	(req, res, next) => {
    	// Successful authentication, redirect home.
    	res.status(200).redirect('/');
  	}	
)

authRouter.route('/user')
.get((req, res, next) => {
    	res.status(200).send(req.user);
  	}	
)



module.exports = authRouter;