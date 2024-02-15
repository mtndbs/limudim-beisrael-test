
( function ( $ ) {

	MP.toggle_scholarship_view = function(){
		
		$('.toggle-scholarship-content-btn').toggleView(
			'.scholarships-content',
			{
				before : function(data){
					if( ! data.active ) {
						data.btn.parents('.scholarships-item').addClass('is-active');
					}
				},
				after : function(data){
					if( ! data.active ) {
						data.btn.parents('.scholarships-item').removeClass('is-active');
					}
				}
			}
		);

		$('.scholarships-content-top').mobileDisplace('.scholarships-top', mobile , 'prepend');

	};

	MP.print_scholarship = function(){

		$('.btn-print-scholarship').on('click', function(){
			lib.print($(this).parents( '.scholarships-item' )[0]);
		});

	};

	MP.toggle_filter_mobile = function(){

		var btn = document.querySelector( '.mobile-toggle-filter' );

		if (! btn ) return;

		if ( lib.viewport().width < mobile ){
			btn.setAttribute('role','button');
		}
	};

	$('.scholarships-link--all-categories').click(function(){
		if( $(this).hasClass('is-active') ){
			$(this).removeClass('is-active');
		}
		else{
			$(this).addClass('is-active');
		}
	});

}) ( window.jQuery);
