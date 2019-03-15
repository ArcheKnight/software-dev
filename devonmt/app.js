const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello, welcome to my website!');
});

app.get('*', (req, res) => {
	res.send('This is an error page');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
