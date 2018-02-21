var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./schemas/user.js');
var FacebookStrategy = require('passport-facebook');
var TwitterStrategy = require('passport-twitter');
const {facebookAuth, twitterAuth} = require('./auth_config.js');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new FacebookStrategy(facebookAuth,
	(accessToken, refreshToken, profile, done) => {
		console.log(profile)
    	User.findOne({facebookId: profile.id}, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (!err && user !== null) {
                return done(null, user);
            }
            else {
                user = new User({ username: profile.displayName });
                user.facebookId = profile.id;
                user.username = profile.username || profile.displayName;
                user.save((err, user) => {
                    if (err)
                        return done(err, false);
                    else
                        return done(null, user);
                })
            }
        });
  	}
));

// passport.use(new TwitterStrategy(twitterAuth,
// 	(accessToken, refreshToken, profile, done) => {
// 		console.log(profile)
//     	User.findOne({facebookId: profile.id}, (err, user) => {
//             if (err) {
//                 return done(err, false);
//             }
//             if (!err && user !== null) {
//                 return done(null, user);
//             }
//             else {
//                 user = new User({ username: profile.displayName });
//                 user.facebookId = profile.id;
//                 user.username = profile.username || profile.displayName;
//                 user.save((err, user) => {
//                     if (err)
//                         return done(err, false);
//                     else
//                         return done(null, user);
//                 })
//             }
//         });
//   	}
// ));





// exports.verifyUser = passport.authenticate('jwt', {session: false});

// exports.verifyAdmin = function (req, res, next) {
//     if (req.user.admin) {
//         return next();
//     }
//     else {
//         err = new Error("You are not authorized to perform this operation!");
//         err.status = 403;
//         return next(err);            
//     }
// };
