const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); // Not necessary because we use views folder which is default

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

// Default route
// '/' is default and uncessary | Will get all urls starting with '/', is default
app.use((req, res, next) => {
	res.status(404).render('404', {
		pageTitle: 'Page Not Found',
		path: ''
	});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
