const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	User.findById('5c984f65f48e8734f09f9685')
		.then(user => {
			req.user = user;
			next();
		})
		.catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const port = process.env.PORT || 3000;
mongoose
	.connect(
		'mongodb+srv://devon:lrt032ca@cluster0-bovxh.mongodb.net/shop?retryWrites=true',
		{ useNewUrlParser: true }
	)
	.then(() => {
		User.findOne().then(user => {
			if (!user) {
				const user = new User({
					name: 'Devon',
					email: 'test@test.com',
					cart: {
						items: []
					}
				});
				user.save();
			}
		});

		app.listen(port, () => {
			console.log(`Connected on port ${port}`);
			console.log('Connected to MongoDB Atlas');
		});
	})
	.catch(err => console.log(err));
