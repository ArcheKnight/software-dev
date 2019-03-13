const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../helpers/path');
const adminData = require('./admin');

// GET /
router.get('/', (req, res, next) => {
	console.log(adminData.products);
	res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
