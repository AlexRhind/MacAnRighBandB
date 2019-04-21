// JavaScript Document

//$(document).ready(function(){
	
	
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
	
 //});
	
	


//Window height (100vh) is also used by the slider

if($(window).width() > 850) { //code does not run when browser is <=849px

	//Get the value of the window object's height onload and send the css value to .slide {height: $(window).height();}
	$(document).ready(function(){
		$('.windowHeight').css('height', $(window).height());
	});

	
}

if($(window).width() > 850) { //code does not run when browser is <=849px


	$(window).resize(function(){
		$('.windowHeight').css('height', $(window).height());
	});
}