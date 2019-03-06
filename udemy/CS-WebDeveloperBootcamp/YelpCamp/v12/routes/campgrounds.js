const express = require('express');
const router = express.Router();
const Campground = require('../models/campground');
const Comment = require('../models/comment');
const middleware = require('../middleware');

// Campgrounds Index
router.get('/', function (req, res) {
  // Get all campgrounds from DB
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render('campgrounds/index', {
        campgrounds: allCampgrounds
      });
    }
  })
});

// Campgrounds New
router.get('/new', middleware.isLoggedIn, function (req, res) {
  res.render('campgrounds/new');
});

// Campgrounds Create
router.post('/', middleware.isLoggedIn, function (req, res) {
  var name = req.body.campground.name;
  var image = req.body.campground.image;
  var description = req.body.campground.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  }
  var newCampground = {
    name: name,
    image: image,
    description: description,
    author: author
  };

  Campground.create(newCampground, (err, campground) => {
    if (err) {
      console.log(err);
    } else {
      req.flash('success', 'Campground created');
      res.redirect('/campgrounds');
    }
  })
});

// Campgrounds Show
router.get('/:id', (req, res) => {
  // Find the campground with provided ID
  Campground.findById(req.params.id).populate('comments').exec((err, foundCampground) => {
    if (err) {
      console.log(err);
    } else {
      // Render the show page for this campground
      res.render('campgrounds/show', {
        campground: foundCampground
      });
    }
  })
})

// Campgrounds Edit
router.get('/:id/edit', middleware.checkCampgroundOwnership, (req, res) => {
  Campground.findById(req.params.id, (err, foundCampground) => {
    res.render('campgrounds/edit', { campground: foundCampground });
  })
})

// Campgrounds Update
router.put('/:id', middleware.checkCampgroundOwnership, (req, res) => {
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCampground) => {
    if (err) {
      res.redirect('/campgrounds');
    } else {
      req.flash('success', 'Campground updated');
      res.redirect('/campgrounds/' + req.params.id);
    }
  })
})

// Campgrounds Delete
router.delete('/:id', middleware.checkCampgroundOwnership, (req, res) => {
  Campground.findByIdAndDelete(req.params.id, (err, campgroundRemoved) => {
    if (err) {
      res.redirect('/campgrounds');
    }
    Comment.deleteMany({ _id: { $in: campgroundRemoved.comments } }, (err) => {
      if (err) {
        console.log(err);
      } else {
        req.flash('success', campgroundRemoved.name + ' deleted');
        res.redirect('/campgrounds');
      }
    })
  })
})

module.exports = router;
