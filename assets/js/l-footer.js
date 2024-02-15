( function($){
	
	function mobile_footer_menu_toggle_view(btn, ul) {

		var $ul = $(ul);

		$(btn).toggleClass('is-active');

		if ( $(btn).hasClass( 'is-active' ) ){

			$ul.css( 'height', 'auto' );
			var height = $ul.height();
			$ul.css( 'height', '');

			$ul.velocity({
				height : height,
			},function(){
				$ul.css( 'height', 'auto' );
			});

		} else {

			$ul.velocity({
				height : 0,
			},function(){
				$ul.css( 'height', '' );
			});

		}
	};

	MP.columns_for_long_footer_list_items = function(){

		var uls = document.querySelectorAll( '.internal-bottom-menu ul ');

		uls.length && [].forEach.call( uls, function( ul ){

			if ( ul.children.length > 8 ){
				ul.classList.add( 'is-column-layout' );
			} else {
				ul.classList.remove( 'is-column-layout' );
			}

			var btn = document.createElement('button');
			btn.setAttribute( 'aria-label', 'הצג תפריט');
			btn.setAttribute( 'aria-hieend', lib.viewport().width > mobile ? 'true' : 'false' );
			btn.className = 'btn-toggle-footer-menu-view is-hidden--desktop';
			btn.innerHTML = '<i class="svgIcon icon-drop-w l-abs-center">' + new SvgIcons().render( 'drop-w' ) + '</i>';

			btn.addEventListener( 'click', function(){
				mobile_footer_menu_toggle_view(this, ul);
			});

			ul.parentNode.insertBefore( btn, ul );

		});
	};


})(window.jQuery);