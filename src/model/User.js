const { DataTypes } = require('sequelize');

const UserSchema = {
    ID: {
        type: DataTypes.INTEGER,
        // autoIncrement: true,
        // primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    CountryCode: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    District: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    Population: {
        type: DataTypes.INTEGER
        // allowNull defaults to true
    }
}

module.exports = (sequelize) => sequelize.define('city', UserSchema, { tableName: 'city', createdAt: false, updatedAt: false });