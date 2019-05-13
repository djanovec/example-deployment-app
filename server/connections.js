const mysql = require("mysql");
// require("./config.js");
let pool = mysql.createPool({
    connectionLimit: 10,
    port: 3306,
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

module.exports.pool = pool;