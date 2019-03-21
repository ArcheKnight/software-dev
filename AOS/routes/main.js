const router = require('express').Router();

const main = require('../controllers/main.js');

// GET home page
router.get('/', main.getHomePage);

// GET error page
router.get('*', main.getErrorPage);

module.exports = router;
