const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    blogs: [{
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }]
})

module.exports = mongoose.model('User', userSchema);
