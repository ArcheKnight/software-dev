const path = require('path');
const fs = require('fs');

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

module.exports = middleware;
