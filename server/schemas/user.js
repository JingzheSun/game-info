var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    facebookId: {
    	type: String,
    	default: ''
    },
    twitterId: {
        type: String,
        default: ''
    },
    admin:   {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);