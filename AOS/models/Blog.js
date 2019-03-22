const path = require('path');
const fs = require('fs');

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

const newDate = () => {
	const now = new Date();
	let month = now.getMonth() + 1;
	let day = now.getDate();
	let year = now.getFullYear();
	let hour = now.getHours();
	let minutes = now.getMinutes();
	let time = 'AM';
	if (hour >= 13) {
		hour -= 12;
		time = 'PM';
	} else if (hour === 0) hour = 12;
	if (minutes.toString().length === 1) minutes = '' + 0 + minutes;
	return `${month}/${day}/${year} ${hour}:${minutes} ${time}`;
};

class Blog {
	constructor(title, text, author, id) {
		this.id = id || Math.random().toString();
		this.title = title;
		this.text = text;
		this.author = author;
		this.created = newDate();
	}

	saveBlog() {
		//this.id = Math.random().toString();
		fetchAllBlogs(blogs => {
			blogs.push(this);
			fs.writeFile(p, JSON.stringify(blogs), err => {
				console.log(err);
			});
		});
	}

	updateBlog(cb) {
		fetchAllBlogs(blogs => {
			const arr = [...blogs].filter(obj => {
				return obj.id !== this.id;
			});
			arr.push(this);
			fs.writeFile(p, JSON.stringify(arr), err => {
				console.log(err);
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
				console.log(err);
			});
			cb();
		});
	}

	static getAllBlogs(cb) {
		fetchAllBlogs(cb);
	}
}

module.exports = Blog;
