//Dependencies

var bodyParser = require("body-parser");
var express = require("express");
var handlebars = require("express-handlebars");
var path = require("path");
var routes = require("./controllers/routes");

var app = express();
var PORT = process.env.PORT || 8080;

// Use static folder to serve pages
// app.use(express.static(path.join(__dirname, "views")));
app.use(express.static("views"));

// Use body parser to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars for templates
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);



// Initialize server
app.listen(PORT, () => {
    console.log(`Server started, listening on PORT ${PORT}...`);
});