﻿var express = require('express');
var path = require('path');
var app = express();
var process = require('process');

// Define the port to run on
app.set('port', process.env.port || 3000);

app.use(express.static(path.join(__dirname, 'dist')));

// Listen for requests
var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});