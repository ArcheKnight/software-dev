const path = require('path');
const fs = require('fs');
const moment = require('moment');

const p = path.join(
	path.dirname(process.mainModule.filename),
	'data',
	'blogs.json'
);

const fetchAllBlogs = cb => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

const setCreated = (blog, cb) => {
	blog.created = new Date();
	blog.time = moment(blog.created).utcOffset(-5).format('LLL');
	cb(blog);
}

class Blog {
	constructor(title, text, author, id, created, time) {
		this.id = id || Math.random().toString();
		this.title = title;
		this.text = text;
		this.author = author;
		this.created = created;
		this.time = time;
	}

	saveBlog() {
		//this.id = Math.random().toString();
		fetchAllBlogs(blogs => {
			setCreated(this, (blog) => {
				blogs.unshift(blog);
				fs.writeFile(p, JSON.stringify(blogs), err => {
					if (err) console.log(err);
				});
			})
		});
	}

	static updateBlog(blog, cb) {
		fetchAllBlogs(blogs => {
			const newBlogs = [...blogs];
			let obj = {};
			for (let ele of newBlogs) {
				if (ele.id === blog.id) obj = ele;
			}
			
			Object.assign(obj, blog);

			fs.writeFile(p, JSON.stringify(newBlogs), err => {
				if (err) console.log(err);
			});
			cb();
		});
	}

	static findById(id, cb) {
		fetchAllBlogs(blogs => {
			const result = blogs.filter(obj => {
				return obj.id === id;
			});
			cb(result);
		});
	}

	static deleteBlog(id, cb) {
		fetchAllBlogs(blogs => {
			const result = blogs.filter(obj => {
				return obj.id !== id;
			});
			fs.writeFile(p, JSON.stringify(result), err => {
				if (err) console.log(err);
			});
			cb();
		});
	}

	static getAllBlogs(cb) {
		fetchAllBlogs(cb);
	}
}

module.exports = Blog;
