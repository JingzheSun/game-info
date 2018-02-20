var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./schemas/user.js');
//var FacebookTokenStrategy = require('passport-facebook-token');

//var config = require('./config.js');

exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// exports.facebookPassport = passport.use(new FacebookTokenStrategy({
//         clientID: config.facebook.clientId,
//         clientSecret: config.facebook.clientSecret
//     }, (accessToken, refreshToken, profile, done) => {
//         User.findOne({facebookId: profile.id}, (err, user) => {
//             if (err) {
//                 return done(err, false);
//             }
//             if (!err && user !== null) {
//                 return done(null, user);
//             }
//             else {
//                 user = new User({ username: profile.displayName });
//                 user.facebookId = profile.id;
//                 user.firstname = profile.name.givenName;
//                 user.lastname = profile.name.familyName;
//                 user.save((err, user) => {
//                     if (err)
//                         return done(err, false);
//                     else
//                         return done(null, user);
//                 })
//             }
//         });
//     }
// ));

// exports.verifyUser = passport.authenticate('jwt', {session: false});

exports.verifyAdmin = function (req, res, next) {
        if (req.user.admin) {
            return next();
        }
        else {
            err = new Error("You are not authorized to perform this operation!");
            err.status = 403;
            return next(err);            
        }
    };
