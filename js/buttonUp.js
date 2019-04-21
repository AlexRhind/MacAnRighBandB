// JavaScript Document

	
	  $(document).ready(function(){
		$('.tooltipped').tooltip();
	  });


    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > (0)) {
            $('#goTop').fadeIn();
        } else {
            $('#goTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#goTop').click(function(){
        $("html, body").animate({scrollTop: $("#top").offset().top}, 0);
        return false;
    });

//});

