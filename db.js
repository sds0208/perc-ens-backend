require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.DBUSER,
    host: process.env.HOST,
    database: process.env.DBNAME,
    port: process.env.PORT,
    password: process.env.PASSWORD,
    ssl: process.env.SSL
});

module.exports = pool;