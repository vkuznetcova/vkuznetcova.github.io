$(document).ready(function() {
	$("input[type=submit").click(function() {
  	$("#qrcode > ").remove();
	  var qrcolor = $(".color .dropdown > p > input").val();
	  var qrsize = $(".size .dropdown > p > input").val();
	  var qrcode = new QRCode(document.getElementById("qrcode"), {
	    width: qrsize,
	    height: qrsize,
	    colorDark : qrcolor,
	  });
  function makeCode() {
    var elText = document.getElementById("text");
    if (!elText.value) return;
    qrcode.makeCode(elText.value);
  }
  makeCode();
  })
 
	$(".color .dropdown").click(function(){
		$(".sizes-menu").removeClass("showSizes-menu");
	    $(".colors-menu").toggleClass("showColors-menu");
	      $(".colors-menu > li").click(function(){
	        $(".color .dropdown > p").html($(this).html());
	          $(".colors-menu").removeClass("showColors-menu");
	      });
	  });
	$(".size .dropdown").click(function(){
		$(".colors-menu").removeClass("showColors-menu");
	    $(".sizes-menu").toggleClass("showSizes-menu");
	      $(".sizes-menu > li").click(function(){
	        $(".size .dropdown > p").html($(this).html());
	          $(".sizes-menu").removeClass("showSizes-menu");
	      });
	  });
});