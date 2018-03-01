var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', Comment);