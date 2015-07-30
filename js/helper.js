(function(){

	//This function is tp help smotthscrolling
	$('a[href^="#"]').on('click', function(){
		$('body').animate({
			scrollTop: $(this.hash).offset().top}, 1000);
		return false;
	});

	//Help to change color when in its section
	$(window).on('scroll resize', onScreen);

})();



function onScreen() {
	$('.section').each(function() {
		var windowScroll = $(document).scrollTop();
		var navHeight = $('nav ul').height();
		var $this = $(this)

		//check if the navbar is in this section

		if((windowScroll + navHeight >= $this.offset().top) &&
			(windowScroll + navHeight <= $this.offset().top + $this.height())) {
			$('li a#nav-' + $this.attr('id')).addClass('highlight');
		console.log($('li a#nav-' + $this.attr('id')));
		} else {
			$('li a#nav-' + $this.attr('id')).removeClass('highlight');
		}
	});
}