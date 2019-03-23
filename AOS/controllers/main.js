const main = {};

const Blog = require('../models/Blog');

main.getHomePage = (req, res) => {
	Blog.getAllBlogs(blogs => {
		res.render('pages/index', {
			pageTitle: 'Home',
			styles: ['styles/index.css'],
			scripts: ['scripts/index.js']
		});
	});
};

main.getAddBlogPage = (req, res) => {
	res.render('pages/addBlog', {
		pageTitle: 'Add Blog'
	});
};

main.postAddBlogPage = (req, res) => {
	const title = req.body.title;
	const author = req.body.author;
	const text = req.body.text;
	const blog = new Blog(title, text, author);

	blog.saveBlog();
	res.redirect('/');
};

main.getEditBlogPage = (req, res) => {
	Blog.findById(req.params.blogId, blog => {
		res.render('pages/editBlog', {
			pageTitle: 'Edit Blog',
			blog: blog[0]
		});
	});
};

main.postEditBlogPage = (req, res) => {
	const id = req.params.blogId;

	const title = req.body.title;
	const author = req.body.author;
	const text = req.body.text;

	const blog = { title, text, author, id };

	Blog.updateBlog(blog, () => {
		res.redirect('/');
	});
};

main.postDeleteBlogPage = (req, res) => {
	const id = req.body.blogId;
	Blog.deleteBlog(id, () => {
		res.redirect('/');
	});
};

main.getErrorPage = (req, res) => {
	res.render('pages/error', {
		pageTitle: 'Error'
	});
};

module.exports = main;
