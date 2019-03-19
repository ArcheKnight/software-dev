const pathsJson = require('./paths.json');

const helpers = {
    getPageVars: (req, res, next) => {
        const pageVars = pathsJson[req.path];
        
        req.pageVars = pageVars;
        next();
    }
}

module.exports = helpers;
