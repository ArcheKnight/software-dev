const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'lrt032ca', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
