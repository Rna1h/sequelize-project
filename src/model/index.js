const config = require('../config/index');
const { Sequelize } = require('sequelize');
const User = require('./User');

// db instance is initiated
const sequelize = new Sequelize(config.dbConfig);


module.exports = {
    City: User(sequelize)
};