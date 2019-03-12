const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => { // Default route
    res.status(404).send('<h1>Page not found</h1>');
})

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening on ${port}`) });
