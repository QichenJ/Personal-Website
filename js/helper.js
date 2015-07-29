$(function() {
	$('a[href^="#"]').click(function() {
		$('body').animate({
			scrollTop: $(this.hash).offset().top}, 1000);
		return false;
	});

}

);