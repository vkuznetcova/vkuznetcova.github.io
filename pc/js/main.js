$(document).ready(function(){

	$('a').on('click', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

$('.items_flex').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active');
      let n=$(this).index();
      $('.item_cont').eq(n).addClass('active').siblings().removeClass('active');

  });

});