( function ( $ ) {

	MP.more_programs = function(){

		$('.more-programs-link').toggleView('.more-programs-list-sub');
	};

	MP.scholarships_and_open_days = function(){

		$('.schoOpenDays-title').toggleView('.schoOpenDays-list', {
			before: function(data){
				if ( lib.viewport().width > mobile ){
					data.btn.kill = true;
				} else {
					data.btn.kill = false;
				}
			}
		});
		
	};

}) ( window.jQuery);