$(document).ready(function() {
			/*브라우저 높이값 구현*/
			var browserWidth = $(window).width();
			var browserHeight = $(window).height();
			console.log("윈도우너비 : " + browserWidth);
			console.log("윈도우높이 : " + browserHeight);
			$('#wrap').css({'height':browserHeight});
		});