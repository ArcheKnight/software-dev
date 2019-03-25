const Blog = require('../models/Blog.js');

exports.getBlogsPage = (req, res) => {
	res.render('pages/blogs/listBlogs', {
		pageTitle: 'Home',
		styles: ['styles/index.css'],
		scripts: ['scripts/index.js']
	});
};

exports.getAddBlogPage = (req, res) => {
	res.render('pages/blogs/addBlog', {
		pageTitle: 'Add Blog'
	});
};

exports.postAddBlogPage = (req, res) => {
	const title = req.body.title;
	const author = req.body.author;
	const body = req.body.text;
	const blog = new Blog({ title, body, author });

	blog.save().then(() => res.redirect('/'));
};

exports.getEditBlogPage = (req, res) => {
	Blog.findById(req.params.blogId, blog => {
		res.render('pages/blogs/editBlog', {
			pageTitle: 'Edit Blog',
			blog
		});
	});
};

exports.postEditBlogPage = (req, res) => {
	const id = req.params.blogId;

	const title = req.body.title;
	const author = req.body.author;
	const text = req.body.text;

	const blog = new Blog({ title, text, author });

	Blog.findByIdAndUpdate(id, blog).then(() => {
		res.redirect('/');
	});
};

exports.postDeleteBlogPage = (req, res) => {
	const id = req.body.blogId;
	Blog.deleteBlog(id, () => {
		res.redirect('/');
	});
};
