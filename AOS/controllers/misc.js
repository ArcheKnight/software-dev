exports.getErrorPage = (req, res) => {
	res.render('pages/error', {
		pageTitle: 'Error'
	});
};