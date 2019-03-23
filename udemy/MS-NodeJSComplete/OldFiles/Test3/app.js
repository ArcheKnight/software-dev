const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'landing.html'));
});

app.get('/users', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'users.html'));
});

app.listen(3000);
