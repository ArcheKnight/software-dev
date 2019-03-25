const router = require('express').Router();
const miscController = require('../controllers/misc');

// GET error page
router.get('*', miscController.getErrorPage);

module.exports = router;