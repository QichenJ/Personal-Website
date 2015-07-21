$(function() {
	var nav = $('#nav');
	var navHomeY = nav.offset().top;
	var isFixed = false;
	var navWrap = $('#nav-wrap');
	var $w = $(window);
	$w.scroll(function () {
		var scrollTop = $w.scrollTop();
		var shouldBeFixed = scrollTop > navHomeY;
		if(shouldBeFixed && !isFixed) {
			nav.css({
				position: 'fixed',
				width: '100%'
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