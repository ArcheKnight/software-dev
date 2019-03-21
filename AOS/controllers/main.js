const main = {};

main.getHomePage = (req, res) => {
	res.render('index', {
		pageTitle: 'Home'
	});
};

main.getErrorPage = (req, res) => {
	res.render('error');
};

module.exports = main;
