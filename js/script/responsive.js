var stickyNavTop = $('.nav-container').offset().top;

$(window).scroll(function() {
	if ($(window).scrollTop() > stickyNavTop){
		$('.nav-container').addClass('fixed');
	}
	else{
		$('.nav-container').removeClass('fixed');
	}
});
