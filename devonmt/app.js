const path = require('path');
const express = require('express');

const mainRoutes = require('./routes/main');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoutes);

app.get('*', (req, res) => {
	res.send('This is an error page');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
