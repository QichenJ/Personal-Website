$(function() {
	var nar = $('#nav');
	var navHomeY = nav.offset().top;
	var isFixed = false;
	var $w = $(window);
	$w.scroll(function () {
		var scrollTop = $w.scrollTop();
		var shouldBeFixed = scrollTop > navHomeY;
		if(shouldBeFixed && !isFixed) {
			nav.css({
				position: 'fixed',
				top: 0,
				left: 0
			});
			isFixed = true;
		}else if (!shouldBeFixed && isFixed) {
			nav.css({
				position: 'static'
			});
			isFixed = false;
		}
	});
});