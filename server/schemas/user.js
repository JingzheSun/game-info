var mongoose = require('../database_connect.js');
var Schema = mongoose.Schema;

var User = new Schema({
    username: {
      type: String,
        default: ''
    },
    admin:   {
        type: Boolean,
        default: false
    }
}, {
    usePushEach: true
});

//User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);