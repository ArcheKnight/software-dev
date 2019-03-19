const router = require('express').Router();
const helpers = require('../middleware/helpers');
const controllers = require('../controllers/main');

// GET landing page
router.get('/', helpers.getPageVars, (req, res) => {
    controllers.landing(req, res)
});

// GET login page
router.get('/login', helpers.getPageVars, (req, res) => {
    controllers.getLogin(req, res);
})

// POST login page
router.post('/login', (req, res) => {
    controllers.postLogin(req, res);
})

// GET sign up page
router.get('/login', helpers.getPageVars, (req, res) => {
    controllers.getSignUp(req, res);
})

// POST sign up page
router.post('/login', (req, res) => {
    controllers.postSignUp(req, res);
})

module.exports = router;
