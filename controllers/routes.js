// Dependencies
var express = require("express");
var router = express.Router();

// Import ORM
// var orm = require("../config/orm");

// Route handler for displaying default homepage
router.get("/", (req, res) => {
    console.log(`Home page requested.`);
    res.render("index");
});

//Route handler for about-us page
router.get("/about-us", (req, res) => {
    console.log(`About Us page requested.`);
    res.render("about");
});

//Route handler for contact page
router.get("/contact-carl", (req, res) => {
    console.log(`Contact page requested.`);
    res.render("contact");
});

//Route handler for add a review page
router.get("/add-review", (req, res) => {
    console.log(`Contact page requested.`);
    res.render("addReview");
});

//Route handler for reviews page
router.get("/reviews", (req, res) => {
    console.log(`Contact page requested.`);
    res.render("review");
});

//Route handler for interior projects page
router.get("/interior-services", (req, res) => {
    console.log(`Contact page requested.`);
    res.render("interior");
});

//Route handler for exterior projects page
router.get("/exterior-services", (req, res) => {
    console.log(`Contact page requested.`);
    res.render("exterior");
});

//Route handler for special projects page
router.get("/special-projects", (req, res) => {
    console.log(`Contact page requested.`);
    res.render("special");
});

// Export router functionality for server to use
module.exports = router;