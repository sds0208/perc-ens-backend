require('dotenv').config();
const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: process.env.DBUSER,
//     host: process.env.HOST,
//     database: process.env.DBNAME,
//     port: process.env.DB_PORT,
//     password: process.env.PASSWORD,
//     ssl: process.env.SSL
// });

const pool = new Pool({
    connectionString: process.env.DB_CONNECTION_STRING
})

module.exports = pool;