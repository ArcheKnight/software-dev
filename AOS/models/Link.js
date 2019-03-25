const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    section: [{
        title: {
            type: String,
            required: true
        },
        links: [{
            name: {
                type: String,
                requied: true
            },
            url: {
                type: String,
                required: true
            }
        }]
    }]
})

module.exports = mongoose.model('Link', linkSchema);
