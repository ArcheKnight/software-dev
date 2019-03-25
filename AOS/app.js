const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./utils/database');
const middleware = require('./middleware/main.js');

const blogRoutes = require('./routes/blogs.js');
const userRoutes = require('./routes/user');
const miscRoutes = require('./routes/misc.js');

const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(path.dirname(process.mainModule.filename), 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(middleware.getLinks, middleware.getUser);
app.use(blogRoutes, userRoutes, miscRoutes);

db.then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Connected on port ${port}`));
})
