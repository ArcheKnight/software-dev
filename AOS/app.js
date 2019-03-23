const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const middleware = require('./middleware/main.js');
const main = require('./routes/main.js');

const app = express();

app.set('view engine', 'pug');
app.use(
	express.static(path.join(path.dirname(process.mainModule.filename), 'public'))
);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', middleware.getDateFroms);
app.use(middleware.getLinks, main);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Connected on port ${port}`));
