/**
 * Created by plter on 2016/12/5.
 */
const mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qazopklnm1029384756",
    database: "cbbmysql"
});

conn.connect(function (err) {
    if (err) {
        console.error(err);
    }
});

module.exports = conn;