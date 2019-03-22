const router = require('express').Router();

const main = require('../controllers/main.js');

// GET home page
router.get('/', main.getHomePage);

// GET add blog page
router.get('/blogs/add', main.getAddBlogPage);

// POST add blog page
router.post('/blogs/add', main.postAddBlogPage);

// GET edit blog page
router.get('/blogs/:blogId/edit', main.getEditBlogPage);

// POST edit blog page
router.post('/blogs/:blogId/edit', main.postEditBlogPage);

// POST delete blog page
router.post('/blogs/:blogId/delete', main.postDeleteBlogPage);

// GET error page
router.get('*', main.getErrorPage);

module.exports = router;
