(function ($) {
	$(document).on('click', 'a[href*="#"]:not([href="#"])', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			|| location.hostname == this.hostname) {

			var hash = this.hash,
				target = $(hash),
				headerHeight = $('#site-top').height() + 5 // Get fixed header height

			target = target.length ? target : $('[name=' + hash.slice(1) + ']')

			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - headerHeight
				}, 500, function () {
					window.location.hash = hash.slice(1);
				});
				return false
			}
		}
	})
})(jQuery)
