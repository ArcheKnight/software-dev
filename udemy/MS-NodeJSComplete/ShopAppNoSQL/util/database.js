const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
	MongoClient.connect(
		'mongodb+srv://devon:lrt032ca@cluster0-bovxh.mongodb.net/test?retryWrites=true'
	)
		.then(result => {
			console.log('Connected to MongoDBAtlas');
			callback(result);
		})
		.catch(err => console.log(err));
};

module.exports = mongoConnect;
