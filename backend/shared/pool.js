const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "admin",
  database: "estore",
  port: 3306,
  multipleStatements: true,
});

module.exports = pool;
