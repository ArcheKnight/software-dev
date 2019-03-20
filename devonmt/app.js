const path = require('path');
const express = require('express');

const helpers = require('./middleware/helpers.js');
const mainRoutes = require('./routes/main');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	helpers.getPageVars(req, res, next);
})

app.use('/', mainRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
