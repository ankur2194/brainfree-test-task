const { Sequelize } = require('sequelize');
const keys = require('./keys');

const sequelize = new Sequelize(keys.db_database, keys.db_username, keys.db_password, {
    host: keys.db_host,
    dialect: 'postgres'
});

module.exports = sequelize;