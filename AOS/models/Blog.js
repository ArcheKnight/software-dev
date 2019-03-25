const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	body: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	comments: [{
		body: {
			type: String,
			required: true
		},
		date: {
			type: Date,
			default: Date.now
		},
		author: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	}]
})

module.exports = mongoose.model('Blog', blogSchema);
