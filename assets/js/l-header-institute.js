
( function ( $ ) {

	MP.header_institute = function(){

		$('.header-institute-slider').slick({
			dots: true,
			prevArrow : '<button class="slider-btn is-prev">'+ new SvgIcons().render('slider-arr-'+right) +'</button>',
			nextArrow : '<button class="slider-btn is-next">'+ new SvgIcons().render('slider-arr-'+left) +'</button>',
			lazyLoad : 'progressive',
			rtl : true,
		}).on('lazyLoaded',function(event, slick, currentSlide, nextSlide){
			var $img = $(currentSlide),
				$src = $img.attr('src');
			
			$img.addClass('l-obscure');

			$img.parent().eq(0).css('background-image','url(' + $src + ')');
						
		});

	};

	MP.header_institute_slider_width = function(){

		var loc = document.getElementById('header_institute_slider_border'),
			slicdr_cell = document.querySelector('.header-institute-slider-cell');
			
		if ( ! loc || ! slicdr_cell ) return;

		lib.on(['load', 'resize'], function(){

			if ( lib.viewport().width <= mobile ) {
				
				slicdr_cell.removeAttribute( 'style' );
				
			} else {

				slicdr_cell.style.width = loc.getBoundingClientRect().left + 'px';

				slicdr_cell.style.marginTop = - $('.breadcrumbs').outerHeight() + 'px';

			}

		});

	};

}) ( window.jQuery );