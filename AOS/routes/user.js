const router = require('express').Router();

const userControllers = require('../controllers/user');

//GET verify user page
router.get('/user/verify-user', userControllers.getVerifyPage);

//POST verify user
router.post('/user/verify-user', userControllers.postVerifyPage);

//GET sign in page
router.get('/user/sign-in', userControllers.getSignInPage);

//GET sign up page
router.get('/user/sign-up', userControllers.getSignUpPage);

module.exports = router;