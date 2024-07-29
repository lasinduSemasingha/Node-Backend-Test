const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const dbConnect = require('./dbConnection');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file to server
app.get('/', (req, res) => {
    fs.readFile('./demo1.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404 Not Found');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, address, age } = req.body;

    const sql = `INSERT INTO customers (name, address, age) VALUES ('${name}', '${address}', ${age})`;
    dbConnect.query(sql, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
        res.json({ message: 'Record inserted successfully' });
    });
});

// Start the server
app.listen(8080, () => {
    console.log('Server is running at http://localhost:8080');
});
