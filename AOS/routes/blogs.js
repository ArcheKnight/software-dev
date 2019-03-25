const router = require('express').Router();

const middleware = require('../middleware/main.js');

const blogsController = require('../controllers/blogs.js');

// GET home page
router.get('/', middleware.getBlogs, blogsController.getBlogsPage);

// GET add blog page
router.get('/blogs/add', blogsController.getAddBlogPage);

// POST add blog page
router.post('/blogs/add', blogsController.postAddBlogPage);

// GET edit blog page
router.get('/blogs/:blogId/edit', blogsController.getEditBlogPage);

// POST edit blog page
router.post('/blogs/:blogId/edit', blogsController.postEditBlogPage);

// POST delete blog page
router.post('/blogs/:blogId/delete', blogsController.postDeleteBlogPage);

module.exports = router;
