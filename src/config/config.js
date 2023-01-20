require('dotenv').config()

const obj = {
    db: {
        dialect: 'mysql',
        database: 'world',
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        port: process.env.PORT
    }
}

// restrict adding/removing new value to obj
Object.freeze(obj);

// restrict changing structure of obj keys | changing values allowed
Object.values(obj).map(key => Object.seal(key))

module.exports = obj;