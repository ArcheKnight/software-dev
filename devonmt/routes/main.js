const router = require('express').Router();
const controllers = require('../controllers/main');

// GET landing page
router.get('/', controllers.landing);

// GET aboutme page
router.get('/aboutme', controllers.aboutme);

// GET 404 page
router.get('/404', controllers.error404);

// GET error page
router.use((req, res) => {
	res.status(404).redirect('/404');
});

module.exports = router;
