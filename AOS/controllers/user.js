const User = require('../models/User');

const password = require('../utils/verifyUser');

exports.getVerifyPage = (req, res, next) => {
    res.render('pages/user/verifyUser', {
        pageTitle: 'Verify User'
    })
}

exports.postVerifyPage = (req, res, next) => {
    const enteredPassword = req.body.password;
    if (enteredPassword === password) {
        return res.redirect('/user/sign-up?verified=true');
    }
    res.redirect('/');
}

exports.getSignInPage = (req, res, next) => {
    res.render('pages/user/signIn', {
        pageTitle: 'Sign In'
    })
}

exports.postSignInPage = (req, res, next) => {
    
}

exports.getSignUpPage = (req, res, next) => {
    if (req.params.verified == 'true') {
        res.render('pages/user/signUp', {
            pageTitle: 'Sign Up'
        })
    } else {
        res.redirect('/');
    }
}

exports.postSignUpPage = (req, res, next) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email
    });
    
    newUser.Save().then(user => {
        req.user = user;
        res.redirect('/');
    })
}