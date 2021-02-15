$(document).ready(function(){
  
  // fixed header
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
      $('.site-header').addClass('fixed');
    } else {
      $('.site-header').removeClass('fixed');
    }
  });

  if ($(window).scrollTop() >= 50) {
    $('.site-header').addClass('fixed');
  } else {
    $('.site-header').removeClass('fixed');
  }

  $(".menu-btn").click(function(){
    $(".menu-btn").toggleClass("active");
    $(".main-menu").slideToggle();
  });

  $(window).resize(function(){
    setTimeout(function(){
      if($(window).width() > 1199){
        $(".menu-btn").removeClass("active");
        $('.main-menu').removeAttr('style');
      }
    },500);
  });

	// scroll to section
	$('a[href*="#senior-deals"]').on('click', function(){
		var $href = $(this).attr('href');
		var $hash = $href.substring($href.indexOf('#'));
		var headerHeight = $('.site-header').outerHeight();
		
		$('html, body').animate({
			scrollTop: $($hash).offset().top - headerHeight
		}, 2000);

		return false;
	});
  
});