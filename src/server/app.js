var express = require("express");
var http = require('http');
var https = require('https');
var path = require("path");
var fs = require('fs');
var bodyParser = require('body-parser');

var privateKey = fs.readFileSync('sslcert/key.pem');
var certificate = fs.readFileSync('sslcert/cert.pem');

var credentials = { key: privateKey, cert: certificate, passphrase: "konkatsu" };

var app = express();

app.use(express.static(path.join(__dirname + '/../public')));
app.get("/index.html", function (req, res) {
    res.sendFile(path.join(__dirname + '/../index.html'));
});
app.get("/index.js", function (req, res) {
    res.sendFile(path.join(__dirname + '/../index.js'));
});
app.post("/gps/data", bodyParser.json(), function (req, res) {
    var umezawalocate = req.body;
    console.log("post called ");
    console.log(req.body);
    console.log(umezawalocate);
});
var server = https.createServer(credentials, app);
server.listen(8443, function () {
    console.log('Listening on port %d', server.address().port);
});
