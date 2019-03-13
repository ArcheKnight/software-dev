const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../helpers/path');
const adminData = require('./admin');

// GET /
router.get('/', (req, res, next) => {
	const products = adminData.products;
	res.render('shop', {
		products,
		pageTitle: 'Shop',
		path: '/'
	});
});

module.exports = router;
