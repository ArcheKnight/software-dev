const moment = require('moment');

const Link = require('../models/Link.js');
const Blog = require('../models/Blog.js');

exports.getLinks = (req, res, next) => {
	Link.find().then(sections => {
		res.locals.sections = sections;
		next();
	})
};

exports.getUser = (req, res, next) => {
	next();
}

exports.getBlogs = (req, res, next) => {
	Blog.find().populate().exec().then(blogs => {
		for (let blog of blogs) {
			blog.timeSince = moment(blog.date).from();
		}

		res.locals.reverse = req.query.reverse || 'false';
		if (req.query.reverse === 'true') blogs.reverse();
		res.locals.blogs = blogs;
		next();
	})
}
