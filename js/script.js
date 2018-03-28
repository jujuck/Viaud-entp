console.log("script.js");

    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
        console.log("j'suis");
    }, 3000);

$(document).ready(function() {
    'use strict';
    new WOW().init();
})