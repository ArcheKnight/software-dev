const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const middleware = require('../middleware'); // Because it is named index.js, it is required automatically

// ROUTES -------------------------------

/*
 
INDEX - /campgrounds GET
NEW - /campgrounds/new GET
CREATE - /campgrounds POST
SHOW - /campgrounds/:id GET
 
NEW COMMENT - /campgrounds/:id/comments/new GET
CREATE COMMENT - /campgrounds/:id/comments POST
 
*/

// Home Page
router.get('/', function (req, res) {
  res.render('landing');
});

// Register New
router.get('/register', (req, res) => {
  res.render('register');
})

// Register Create
router.post('/register', middleware.lowerUsername, (req, res) => {
  var newUser = new User({ username: req.body.username }); // This creates the user
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      req.flash('error', err.message);
      return res.redirect('/register');
    }
    passport.authenticate('local')(req, res, () => { // This is just to login after creating the user
      req.flash('success', 'Thank you for signing up ' + user.username + '!');
      res.redirect('/campgrounds');
    })
  });
})

// Login New
router.get('/login', (req, res) => {
  res.render('login');
})

// Login 'Create'
router.post('/login', middleware.lowerUsername, passport.authenticate('local',
  {
    successRedirect: '/campgrounds',
    failureRedirect: '/login'
  }), (req, res) => { });

// Logout 'Create'
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'Logged out');
  res.redirect('/campgrounds');
})

module.exports = router;
