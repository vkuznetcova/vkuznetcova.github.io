$(document).ready(function($){
	$(".slowly").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
	if ($(window).width() < 768) {
		$('.nav-link').toggleClass('secondary-nav-link');
		$('.primary-nav').toggleClass('secondary-nav').toggleClass('primary-nav');
	}
	$('.secondary-nav-link, .secondary-nav a').click(function () {
		$('.secondary-nav-link').toggleClass('secondary-nav-link_active');
		$('.secondary-nav').toggleClass('secondary-nav_active');
		$('body').toggleClass('overflow-hidden');
		});	
	// responsive
	$(window).resize(function() {
		if ($(window).width() < 768) {
			$('.nav-link').addClass('secondary-nav-link');
			$('.primary-nav').addClass('secondary-nav').removeClass('primary-nav');
		}
		else {
			$('.nav-link').removeClass('secondary-nav-link');
			$('.secondary-nav').addClass('primary-nav').removeClass('secondary-nav');
		}
	});
});
	