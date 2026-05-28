const mysql = require("mysql12/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "login_db"
});

module.exports = pool;



