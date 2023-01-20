const { Sequelize } = require('sequelize');
const config = require('./src/config/config');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('mysql://root:root:3306/world')


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(config.db);

console.log(config)