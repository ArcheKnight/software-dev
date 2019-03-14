const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello');
});

app.get('/goodbye', (req, res) => {
	res.send('Goodbye!');
});

const port = 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
