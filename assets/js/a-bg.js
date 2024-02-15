

( function ( $ ) {

	MP.bg = function(){

		var els = document.querySelectorAll('[data-bg]');

		els.length && lib.on( 'resize' , function(){
			
			[].forEach.call ( els , function ( el ){

				try {

					var bgs = el.getAttribute('data-bg').split(','),
						bg = '';

					if ( lib.viewport().width >= mobile ){
						bg = bgs[0] ? bgs[0].trim() : '';
					} else {
						if ( bgs[0] ) bg = bgs[1] ? bgs[1].trim() : bgs[0].trim();
					}

					if ( bg ) el.style.backgroundImage = 'url(' + bg + ')';

				} catch(err){console.log(err)}
			});


		});

	};


})(window.jQuery);