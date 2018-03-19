$inst = function() {
	var token = '502797215.39d6786.ced7786ebeaa4e79a66be031a7f497c3', 
    userid = 502797215;
$.ajax({
	url: myurl,
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: 10},
	success: function(response){
		  for (var i=0;i<(response.data).length;i++) {
		  	if(i>-1) 
		  		$('.container').append('<div class="box box'+i+'"><div class="photo"></div><div class="discription"><div class="text"></div><span class="line"></span><div class="caption"><div class="date"><i class="fa fa-calendar"></i></div><div class="like"><i class="fa fa-heart"></i></div></div></div></div>');

  		 var date = new Date(response.data[i].created_time * 1000),
  		  months = ['ЯНВАРЯ','ФЕВРАЛЯ','МАРТА','АПРЕЛЯ','МАЯ','ИЮНЯ','ИЮЛЯ','АВГУСТА','СЕНТЯБРЯ','ОКТЯБРЯ','НОЯБРЯ','ДЕКАБРЯ'],
  		  year = date.getFullYear(),
  		  month = months[date.getMonth()],
  		  date = date.getDate(),
  		  time = date + ' ' + month + ' ' + year;

  		 if ((response.data[i].caption.text)==='.')
  		  	 var discription = 'Нет описания';
  		  	else 
  		  		var discription = response.data[i].caption.text;

			 $('.box'+i+'>.photo').append('<img src="'+response.data[i].images.standard_resolution.url+'">');
		   $('.box'+i).find('.text').append('<p>'+discription+'</p>');
			 $('.box'+i).find('.date').append('<time>'+time+'</time>');
			 $('.box'+i).find('.like').prepend(response.data[i].likes.count);
			};

			 (typeof (response.pagination.next_max_id)===undefined)?
				(myurl= 'https://api.instagram.com/v1/users/self/media/recent')
				:(myurl ='https://api.instagram.com/v1/users/self/media/recent?access_token=502797215.39d6786.ced7786ebeaa4e79a66be031a7f497c3&max_id='+response.pagination.next_max_id);
	},
	error: function(response){
		console.log(response); 
	}
});
};

$(document).ready(function($) {
	myurl= 'https://api.instagram.com/v1/users/self/media/recent';
    $inst();
  $('.more').click(function() { 
			$('.container > .box').remove();
			$inst();
		});  
  $(".up").on("click", function (event) {
		event.preventDefault();
		$('body,html').animate({scrollTop: 0}, 500);
	});
});
 


