const path = require('path');
const fs = require('fs');

const moment = require('moment');
const Blog = require('../models/Blog');

const middleware = {};

const p = path.join(
	path.dirname(process.mainModule.filename),
	'data',
	'links.json'
);

middleware.getLinks = (req, res, next) => {
	fs.readFile(p, (err, data) => {
		if (err) {
			res.locals.links = [];
			next();
		} else {
			res.locals.links = JSON.parse(data);
			next();
		}
	});
};

middleware.getDateFroms = (req, res, next) => {
	Blog.getAllBlogs(blogs => {
		for (let blog of blogs) {
			blog.timeSince = moment(blog.created).from();
		}

		res.locals.reverse = req.query.reverse || 'false';
		if (req.query.reverse === 'true') blogs.reverse();
		res.locals.blogs = blogs;
		next();
	})
}

module.exports = middleware;
