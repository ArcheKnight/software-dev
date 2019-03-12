const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => { // '/' is default and uncessary | Will get all urls starting with '/', is default
    res.send('<h1>Hello!</h1>');
});

module.exports = router;
