// Dependencies
var express = require("express");
var router = express.Router();

// Import ORM
// var orm = require("../config/orm");

// Route handler for displaying default homepage
router.get("/", (req, res) => {
    console.log(`Home page requested. ${req.body.params}`);
    res.render("index");
});

//Route handler for about-us page
router.get("/about-us", (req, res) => {
    console.log(`About Us page requested. ${req.body.params}`);
    res.render("about");
});

//Route handler for contact page
router.get("/contact-carl", (req, res) => {
    console.log(`About Us page requested. ${req.body.params}`);
    res.render("contact");
});


// Export router functionality for server to use
module.exports = router;