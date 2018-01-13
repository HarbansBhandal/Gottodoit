// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var methodOverride = require("method-override");

// Require the routes and use them
var api = require('./api/routes/routes');

// Initialize Express
var app = express();

// use morgan for debug logging
app.use(logger("dev"));

// set the port
var port = process.env.PORT || 3000;

// set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// set the public static directory
app.use(express.static(__dirname + '/app'));

// use the /api directory when referencing api
app.use('/api', api);

// Start up the express server
// Listen on port 3000
app.listen(port, function() {
	console.log("App running on port:", port);
});
