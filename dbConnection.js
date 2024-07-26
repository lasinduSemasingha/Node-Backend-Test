var mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lasindu$2001",
    database: "mydb"
});

con.connect(err => {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;
