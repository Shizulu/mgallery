$(function(){
		$('.jsScroll a').click(function(){
			var offset = $($(this).attr('href')).offset();
			$('html, body').animate({scrollTop:offset.top},500);
			return false;
		});
		!function(n){jQuery.fn.extend({pageTop:function(){
			var o=n(this),i={viewScrollTop:1},e=function(){c(),n(window).scroll(function(){c()})},c=function(){if(n(window).scrollTop()>i.viewScrollTop){if("inline"==o.css("display"))return!1;o.fadeIn()}else o.fadeOut()};e()}}),n(function(){n(".pageTop a").pageTop()})}(jQuery);
	});
