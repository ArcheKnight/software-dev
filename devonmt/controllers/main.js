const controllers = {
    landing: (req, res, next) => {
        const pageVars = req.pageVars;
        
        return res.render('templates/layout', { pageVars });
    }
}

module.exports = controllers;