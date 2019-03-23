const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('This middleware ran!');
    next();
});

app.use('/users', (req, res, next) => {
    res.send('<h1>This is the users page!</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Welcome to the landing page!</h1>');
});

app.listen(process.env.PORT || 3000);