const express = require('express');
const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://devon:lrt032ca@cluster0-tt7lk.mongodb.net/AOS?retryWrites=true';
module.exports = mongoose.connect(dbUrl, { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch(err => console.log(err));
