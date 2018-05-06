$(document).ready(function(){

$("#trans").click(function(){
  $("#transModal").addClass("show");
});
$("#admin").click(function(){
  $("#adminModal").addClass("show");
});
$("#setup").click(function(){
  $("#setupModal").addClass("show");
});
$("#sm").click(function(){
  $("#smModal").addClass("show");
});
$(".modal").click(function(){
  $(".modal").removeClass("show");
});


// Assign flexslider function to class .flexslider
$('.flexslider').flexslider({

  // Customize flexslider properties
  animation: "slide",
  slideshowSpeed: 5000,
  animationSpeed: 1000,
  slideshow: false,
  directionNav: false,
  controlNav: false,
  start: function (slider) {

    // Click on the left arrow
    $('#flex-left').on('click', function(event){

      // prevent default action
      event.preventDefault();

      // Move to previous slide
      $('.flexslider').flexslider('prev');

    });

    // Click on the right arrow
    $('#flex-right').on('click', function(event){

      // prevent default action
      event.preventDefault();

      // Move to next slide
      $('.flexslider').flexslider('next');

    });

  }

});

//smooth scrolling better because rachel
$("a[href^='#']").click(function () {


  var link = this.hash.substr(1);
  var section = $('*[id=' + link + ']');

  $('html,body').animate({
    scrollTop: section.offset().top
  }, 800);
  return false;
});


});
