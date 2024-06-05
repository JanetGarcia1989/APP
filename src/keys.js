//const {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} = require('./config.js');

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || ''
const DB_NAME = process.env.DB_NAME || 'database_links'
const DB_PORT = process.env.DB_PORT || 3306


module.exports = {

    database: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        port:DB_PORT
    }

};