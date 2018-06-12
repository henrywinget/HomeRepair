// require('dotenv').config();
// var fs = require("fs");
// var keys = require("./keys.js");
// var request = require('request');
// // var buf = Buffer.from('BASIC=basic');
// // var config = env.parse(buf);
// console.log(typeof config, config);

$('document').ready(function () {

    // function myMap() {
    //     var mapOptions = {
    //         center: new google.maps.LatLng(51.5, -0.12),
    //         zoom: 10,
    //         mapTypeId: google.maps.MapTypeId.HYBRID
    //     }
    //     var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // };

    //Loads all interior pictures onto DOM via Imgur API
    function showAlbum() {
    var intHash = "hiDJ9WV";
    var extHash = "SYbn7x0";
    var queryURL = "https://api.imgur.com/3/album/" + imgurHash + "/images";
    var apiKey = "18dd9b08aea1b84";

    //Calls our Imgur API
    $.ajax({
        url: queryURL,
        method: "GET",
        Authorization: "Client-ID " + apiKey,
    })
        //Responds with adding 'still' gifs to the page and giving them unique
        // element identifers to reference later in jquery and CSS
        .then(function (response) {
            var results = response.data;
            console.log(response);
            console.log(results[0].link);
            for (var i = 0; i < results.length; i++) {

                var imageDiv = $("<div id='interior-images-here'>");
                var intImages = results[i].link;
                var img = $("<img src='" + intImages + 
                "' class='rounded mx-auto d-block' alt='interior-image-" + i + "'>");
                imageDiv.prepend(img);
                $("#interior-pictures").prepend(imageDiv);

            }
        });
    }

    





    interiorAlbum();
});