(function ($) {
	$(function () {
		$('#navbar').pushpin();
		$(".button-collapse").sideNav();
		$('.parallax').parallax();


	
			$("#lightgallery-Wood").lightGallery();
			// $("#lightgallery-Metal").lightGallery();
			$('.openWoodGallery').click(function () {
				$("#lightgallery-Wood a").trigger('click');
			})
			// $('.openMetalGallery').click(function () {
			// 	$("#lightgallery-Metal a").trigger('click');
			// })



	}); // end of document ready
})(jQuery); // end of jQuery name space