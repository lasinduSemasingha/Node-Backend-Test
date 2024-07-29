var mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});
// Connection testing
con.connect(err => {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;
