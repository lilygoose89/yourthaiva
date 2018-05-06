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

<<<<<<< HEAD
//smooth scrolling better because rachel
$("a[href^='#']").click(function () {

=======

$("a[href^='#']").click(function (event) {
  event.preventDefault();
>>>>>>> 96849b2fa340c1ab25f73d0bb89d9243477e8077

  var link = this.hash.substr(1);
  var section = $('*[id=' + link + ']');

  $('html,body').animate({
<<<<<<< HEAD
    scrollTop: section.offset().top
=======
    scrollTop: section.offset().top - 48
>>>>>>> 96849b2fa340c1ab25f73d0bb89d9243477e8077
  }, 800);
  return false;
});

<<<<<<< HEAD

});
=======
// Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//       &&
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });
>>>>>>> 96849b2fa340c1ab25f73d0bb89d9243477e8077
