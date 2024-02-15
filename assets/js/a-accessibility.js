( function ( $ ){

	MP.accessibility = function(){
		var _self = this;
		
		var a11y = new Accessible_Bundle({
			main_menu : '.top-menu-list',
			sub_menu : '.sub-menu',
			forms : 'form',
			pagination : '.pagination',
			elems_to_skip_on_tab_navigation : '.lazy_load,.grad_load',

			tags : {
				'.open_sub' : {
					'aria-label' : lib.translation( 'תפריט משני' , 'sub menu' ),
				},
				'#show_mobile_search' : {
					'aria-label' : lib.translation( 'פתח חיפוש במובייל' , 'open mobile search' ),
				},
				'.is-prev' : {
					'aria-label' : lib.translation( 'התמונה הקודמת' , 'previous image' ),
				},
				'.is-next' : {
					'aria-label' : lib.translation( 'התמונה הבאה' , 'next image' ),
				},
				'.breadcrumbs' : {
					'aria-label' : lib.translation( 'פירורי לחם' , 'bread crumbs' ),
				},
				'.menu-ul' : {
					'role' : 'menubar',
					'aria-label' : lib.translation( 'תפריט מוצרים' , 'products menu' )
				},
				'.menu-ul li , .cat-item' : {
					'role' : 'menuitem'
				},
				'.gallery-slider-thumbs-slide' : {
					'role' : 'button',
					'aria-label' : lib.translation( 'הצג תמונה מוגדלת' , 'show enlarged image')
				},
				'.sidebarMenu item' : {
					'role' :'navigation',
				},
				'ul.children' : {
					'role' : 'menu'
				},
			}
		});
		
	}
	
})(window.jQuery);