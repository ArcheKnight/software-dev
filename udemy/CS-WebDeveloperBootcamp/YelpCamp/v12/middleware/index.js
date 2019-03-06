const Campground = require('../models/campground');
const Comment = require('../models/comment');

const middlewareObj = {};

// Is owner of campground post?
middlewareObj.checkCampgroundOwnership = function (req, res, next) {
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, (err, foundCampground) => {
      if (err) {
        res.redirect('back');
      } else {
        if (foundCampground.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', 'You do not own this campground post');
          res.redirect('back');
        }
      }
    })
  } else {
    req.flash('error', 'Please login first');
    res.redirect('back');
  }
}

// Is owner of comment post?
middlewareObj.checkCommentOwnership = function (req, res, next) {
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
      if (err) {
        res.redirect('back');
      } else {
        if (foundComment.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', 'You do not own this comment');
          res.redirect('back');
        }
      }
    })
  } else {
    req.flash('error', 'Please login first');
    res.redirect('back');
  }
}

// Is logged in at all?
middlewareObj.isLoggedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'Please login first');
  res.redirect('/login');
}

// Usernames are not case-sensitive with this
middlewareObj.lowerUsername = function (req, res, next) {
  req.body.username = req.body.username.toLowerCase();
  next();
}

module.exports = middlewareObj;
