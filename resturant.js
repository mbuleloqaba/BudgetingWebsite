$(document).ready(function() {
  // Alert when the page is loaded
  alert("Page loaded!");

  // Change background color of body
  $("body").css("background-color", "lightblue");

  // Set font-weight to bold for the element with id "my-paragraph"
  $("#my-paragraph").css("font-weight", "bold");

  // Console.log the target element when clicked
  $(document).ready(function() {
    $("#fade-img").on("click", function(e) {
      console.log(e.target);
    });
  });

  // Fade out the clicked element when clicked
  $(document).on("click", function(e) {
    $(e.target).fadeOut();
  });

  // Toggle class "open" for "aside" element when the menu burger is clicked
  $('.menu-burger').click(function() {
    $('aside').toggleClass('open');
  });

  // Slide toggle the dropdown menu on hover
  $(".menu").hover(function() {
    $(this).find(".dropdown").stop().slideToggle("fast");
  });

  // Animate the page background, margin, and position recursively
  function animatePage() {
    $('body').animate({ backgroundColor: '#ffcc00' }, 2000)
             .animate({ marginLeft: '+=50px' }, 2000)
             .animate({ marginTop: '+=50px' }, 2000)
             .animate({ backgroundColor: '#00ccff' }, 2000)
             .animate({ marginLeft: '-=50px' }, 2000)
             .animate({ marginTop: '-=50px' }, 2000, animatePage);
  }

  // Start the animation on page load
  animatePage();

  // Fade out and fade in the element with id "fade-img" when the button is clicked
  $("#fade-btn").click(function() {
    $("#fade-img").fadeOut(3000).fadeIn(3000);
  });

  $('#stopButton').on('click', function() {
    $('*').stop(true, true);
  });
  

});

  //Used definitions from Hyperion Dev Full Stack Software and Web Developer pdf resourse: "JQUERY"//
  //Used FreeCodeCamp Jquery tutorial//
  