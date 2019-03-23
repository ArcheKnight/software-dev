const fetchData = () => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done!');
		}, 1500);
	});
	return promise;
};

// Asynchronous code | Doesn't block other code, but isn't run immediately
// new promise creates a promise function...

setTimeout(() => {
	console.log('Timer is done');
	fetchData()
		.then(text => {
			console.log(text);
			return fetchData();
		})
		.then(text2 => {
			console.log(text2);
		});
}, 2000);

console.log('hello'); // Synchronous code | Runs at the same time (essentially)

const lol = 'Jim';
console.log(`Again ${lol}`); // the ` (backtick) starts a template literal where you can use the ${} syntax to add vars to strings dynamically
