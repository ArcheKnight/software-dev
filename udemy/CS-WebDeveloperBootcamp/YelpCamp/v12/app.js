const express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  LocalStrategy = require('passport-local'),
  methodOverride = require('method-override'),
  flash = require('connect-flash'),
  Campground = require('./models/campground'),
  Comment = require('./models/comment'),
  User = require('./models/user'),
  seedDB = require('./seeds');

// Requiring route files
const commentRoutes = require('./routes/comments'),
  campgroundRoutes = require('./routes/campgrounds'),
  indexRoutes = require('./routes/index');

const app = express();

mongoose.connect('mongodb://localhost/yelp_camp', { // Connect to DB
  useNewUrlParser: true,
  useFindAndModify: false
}).then(() => { console.log('DB Connected') });

app.set('view engine', 'ejs'); // Set view engine for ejs
app.use(express.static(__dirname + '/public')); // Set default directory for static files
app.use(bodyParser.urlencoded({ // Prepare body-parser
  extended: true
}));
app.use(methodOverride('_method'));
app.use(flash());

//seedDB(); // Seed the DB with pre-configured data

// PASSPORT CONFIGURATION
app.use(require('express-session')({
  secret: 'I have a plushy godzilla near me and my mouse is plugged in',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
})

// Use the external route files
app.use(indexRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);

// DEFAULT ROUTE
app.get('*', function (req, res) {
  res.redirect('/');
});

// LISTENER -----------------------------
const port = 5000;
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
