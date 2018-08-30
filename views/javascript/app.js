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
    function intAlbum() {
    var page = document.URL;
    var intHash = "o0gGxmf";
    var queryURL = "https://api.imgur.com/3/album/" + intHash + "/images";
    var apiKey = "Client-ID 18dd9b08aea1b84";

    // function servicePage() {
    //     if(page = "http://localhost:8080/interior-services"){
    //         queryURL = "https://api.imgur.com/3/album/" + intHash + "/images";
    //         return queryURL;
    //         console.log(queryURL);
    //     } if(page = "http://localhost:8080/exterior-services"){
    //         queryURL = "https://api.imgur.com/3/album/" + extHash + "/images";
    //         return queryURL;
    //         console.log(queryURL);
    //     } else {
    //         throw err;
    //     }
    //     console.log(queryURL);
    // };
    
    // console.log(page);
    //Calls our Imgur API
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "Authorization": apiKey
          }
    })
        //Responds with adding interior images from Carl's IMGUR account to the page and giving them unique
        // element identifers to reference later in jquery and CSS
        .then(function (response) {
            var results = response.data;
            // console.log(response);
            // console.log(results[0].link);
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

    function extAlbum() {
        var page = document.URL;
        var extHash = "hoOMZMG";
        var queryURL = "https://api.imgur.com/3/album/" + extHash + "/images";
        var apiKey = "Client-ID 18dd9b08aea1b84";
    
        // function servicePage() {
        //     if(page = "http://localhost:8080/interior-services"){
        //         queryURL = "https://api.imgur.com/3/album/" + intHash + "/images";
        //         return queryURL;
        //         console.log(queryURL);
        //     } if(page = "http://localhost:8080/exterior-services"){
        //         queryURL = "https://api.imgur.com/3/album/" + extHash + "/images";
        //         return queryURL;
        //         console.log(queryURL);
        //     } else {
        //         throw err;
        //     }
        //     console.log(queryURL);
        // };
        
        // console.log(page);
        //Calls our Imgur API
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
                "Authorization": apiKey
              }
        })
            //Responds with adding interior images from Carl's IMGUR account to the page and giving them unique
            // element identifers to reference later in jquery and CSS
            .then(function (response) {
                var results = response.data;
                // console.log(response);
                // console.log(results[0].link);
                for (var i = 0; i < results.length; i++) {
    
                    var imageDiv = $("<div id='exterior-images-here'>");
                    var intImages = results[i].link;
                    var img = $("<img src='" + intImages + 
                    "' class='rounded mx-auto d-block' alt='interior-image-" + i + "'>");
                    imageDiv.prepend(img);
                    $("#exterior-pictures").prepend(imageDiv);
    
                }
            });
        }





    intAlbum();
    extAlbum();

    $('.carousel').carousel({
        interval: 4000
      });
});
