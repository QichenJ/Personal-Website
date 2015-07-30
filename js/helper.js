

(function(){
	$('a[href^="#"]').on('click', function(){
		$('body').animate({
			scrollTop: $(this.hash).offset().top}, 1000);
		return false;
	});

})();