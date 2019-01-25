/**
 * Module dependencies.
 */
'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
var bodyParser = require('body-parser');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(express.logger('dev'));
app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/tests')));

// development only
// if ('development' == app.get('env')) {
//     app.use(express.errorHandler());
// }

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});