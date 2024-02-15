( function ( $ ) {

	MP.whats_new = function(){

		var items = document.querySelectorAll( '.whats-new-item' );

		items.length && [].forEach.call( items , function( item ){

			var $btn 		= $( item ).find( '.mobile-open-whats-new-content' ),
				$title		= $( item ).find( '.whats-new-title' );

			$title.on( 'click', function(){
				$btn.trigger( 'click' );
			});

		});
		
		$('.mobile-open-whats-new-content').toggleView( '.whats-new-content' );
	};

}) ( window.jQuery );