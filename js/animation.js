$(function() {
  var img = $("#boat"),
    width = img.get(0).width,
    screenWidth = $(window).width(),
    duration = 25500;

function animateBoat() {
    img.css("left", -width).animate({
        "left": screenWidth
    }, duration, animateBoat);
}

animateBoat();
});

$(window).load(function() {
    $(".preloader").fadeOut("slow", function(){
      	$(".preloader-left").addClass("slide-left");
      	$(".preloader-right").addClass("slide-right");
      	$("#portfolio-case").addClass("full-portfolio");
    });
});
