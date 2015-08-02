(function(){

	//This function is tp help smotthscrolling
	$('a[href^="#"]').on('click', function(){
		$('body').animate({
			scrollTop: $(this.hash).offset().top}, 1000);
		return false;
	});

	//Help to change color when in its section
	$(window).on('scroll resize', onScreen);


	//This is for easypiechart
	$('.chart').waypoint(function(){
		$(this).easyPieChart({
		barColor: 'rgba(66, 68, 69, 1)',
		trackColor: 'rgba(215, 219, 221, 0.6)',
		lineWidth: 10,
		animate: 1000,
		size: 100,
		onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
		}, {
			triggerOnce: true,
			offset: 'bottom-in-view'
	});
	
	$('.hamburgerIcon').on('click', function() {
		var navbar = $('#nav');
		if(navbar.css('display') === 'none') {
			navbar.css('display',  'block');
		}else {
			navbar.css('display', 'none');
		}
	});
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