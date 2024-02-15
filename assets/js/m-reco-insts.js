( function ( $ ) {

	MP.reco_inst_slider = function(){

		var right = ! lib.ltr() ? 'right' : 'left';
		var left =  lib.ltr() ? 'right' : 'left';

		$('.reco-insts-slider').each(function(){
			
			var $slider = $(this);
			
			$slider.slick({ 
				rtl: ! lib.ltr(),
				speed: 700,
				dots:false,
				prevArrow : '<button class="slider-btn is-prev">'+ new SvgIcons().render('slider-arr-'+right) +'</button>',
				nextArrow : '<button class="slider-btn is-next">'+ new SvgIcons().render('slider-arr-'+left) +'</button>',
				swipe : true,
				fade : false,
				autoplay: false,
				cssEase : ease,
				slidesToShow : 6,
				slidesToScroll : 3,
				accessibility : false,
				//infinite : infinite,
				responsive: [
					{
						breakpoint: mobile + 1,
						settings: {
							slidesToScroll: 1,
							slidesToShow : 1,
							centerMode: true,
							centerPadding: '5.93em',
							speed: 500
						}
					},
					
				]	
			});

		});

	};

}) ( window.jQuery);