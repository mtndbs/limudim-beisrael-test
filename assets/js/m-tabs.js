function slider_classes( $slider ){
	
	$slider.addClass( 'slider-sliced-edge' );
	
	$slider.on( 'afterChange', function( event, slick, nextSlide ){

		if( currentSlide ){

			$slider.addClass( 'is-slider-scrolled-beyond-first-slide' );

			var slides = $slider.find('.slick-slide'),
				last_slide = slides.eq(slides.length - 1)[0];
				
			if ( last_slide.getBoundingClientRect().left > 0) {
				$slider.addClass( 'is-slider-scrolled-to-last-slide' );
			} else {
				$slider.removeClass( 'is-slider-scrolled-to-last-slide' );
			}

		} else {

			$slider.removeClassStartingWith('is-slider');

		}

	});
}


( function ( $ ) {

	function tab_highlight( tab ){

		var tabs = document.querySelectorAll( '.tabs-' + tab.getAttribute('data-set') + ' .tabs-item-link' );
		
		tabs.length && [].forEach.call( tabs , function( t ){

			if ( t === tab ) {
				t.classList.add( 'is-active' );
			} else {
				t.classList.remove( 'is-active' );
			}
			
		});
	}

	function tab_associated_content_display( tab ){

		if ( ! tab ) return;

		var contents = document.querySelectorAll( '.cont-' + tab.getAttribute( 'data-set' ) );
		var tabContent;

		contents.length && [].forEach.call( contents , function( item ){

			if ( item.id === 'tab_content-' + tab.getAttribute( 'data-id' ) ) {
				$(item).attr('aria-hidden','false');
				tabContent = item;
			} else {
				$(item).attr('aria-hidden','true');
			}

			$('.tabs-content-set').removeClassStartingWith( 'active-tab-' );
			
		});

		tab_highlight(tab);

		var ajaxHandle = tab.dataset.ajaxFunction || false;
		var ajaxLoaded = tab.dataset.ajaxLoaded || false;

		if (ajaxHandle && ! ajaxLoaded) {
			try {
				var tabBtn = tab;
				window[ajaxHandle](tabBtn, tabContent);
				tab.dataset.ajaxLoaded = true;
			} catch(e) {
				console.error(e);
			}
		}
	}

	MP.tabs = function(){

		var tabs = document.querySelectorAll( '.tabs-item-link' );
		
		if ( ! tabs.length ) return;

		tab_associated_content_display( document.querySelector( '.tabs-institutes .tabs-item-link' ) );
		tab_associated_content_display( document.querySelector( '.tabs-opinions .tabs-item-link' ) );

		[].forEach.call( tabs , function( tab, i  ){

			tab.addEventListener( 'click', function(){
				
				tab_associated_content_display( tab );

			});

		});
		
	};


	MP.rating_charts_slider = function(){

		$( '.institutes-charts-list' ).each(function() {
			if (this.dataset.rating_charts_ready) {
				return;
			}

			var $slider = $(this);

			$slider.slick({
				swipe : true,
				fade : false,
				autoplay: false,
				cssEase : ease,
				accessibility : false,
				infinite : false,
				variableWidth: false,
				centerMode : false,
				rtl: ! lib.ltr(),
				speed: 500,
				dots:false,
				prevArrow : '<button class="slider-btn is-prev">'+ new SvgIcons().render('slider-arr-'+right) +'</button>',
				nextArrow : '<button class="slider-btn is-next">'+ new SvgIcons().render('slider-arr-'+left) +'</button>',
				responsive: [
					{
						breakpoint: mobile + 1,
						settings: {
							slidesToScroll: 1,
							slidesToShow : 3,
						}
					},
					{
						breakpoint: 9999,
						settings: "unslick"
					},
				]
			});

			slider_classes( $slider );

			$slider.on( 'beforeChange', function(){
				lib.run_all ( new Ddoughnut_chart() );
			});

			this.dataset.rating_charts_ready = true;
		});

	};

	window.tab_load_ajax = function(url, cb) {
		var content;

		$.ajax({
			url: url,
			type: 'GET',
			async: true,
			success: function(data) {
				cb(data)
			},
			error: function() {
				cb('Error occurred.')
			},
		});

		return content;
	}

	window.tab_ajax_callback_review = function(tabBtn, tabContent) {
		window.tab_load_ajax(tabBtn.dataset.ajaxUrl, function(content) {
			tabContent.innerHTML = content;

			// Init
			$(tabContent).find('.lazy_load:not(.loaded)').each(function() {
				window.lazy_load_init(this);
			});
			window.Main.prototype.loadIcons();
			window.Main.prototype.slider_4();
			window.Main.prototype.column_chart_standard();
		});
	}

	window.tab_ajax_callback_rating = function(tabBtn, tabContent) {
		window.tab_load_ajax(tabBtn.dataset.ajaxUrl, function(content) {
			tabContent.innerHTML = content;

			// Init
			$(tabContent).find('.lazy_load:not(.loaded)').each(function() {
				window.lazy_load_init(this);
			});
			window.Main.prototype.loadIcons();
			window.Main.prototype.rating_charts_slider();
			window.Ddoughnut_chart.prototype.main_loop();
		});
	}

	window.tab_ajax_callback_institutePrefer = function(tabBtn, tabContent) {
		window.tab_load_ajax(tabBtn.dataset.ajaxUrl, function(content) {
			tabContent.innerHTML = content;

			// Init
			$(tabContent).find('.lazy_load:not(.loaded)').each(function() {
				window.lazy_load_init(this);
			});
			window.Main.prototype.loadIcons();
			window.Main.prototype.slider_4();
			window.Main.prototype.column_chart_standard();
		});
	}

	window.tab_ajax_callback_tips = function(tabBtn, tabContent) {
		window.tab_load_ajax(tabBtn.dataset.ajaxUrl, function(content) {
			tabContent.innerHTML = content;

			// Init
			$(tabContent).find('.lazy_load:not(.loaded)').each(function() {
				window.lazy_load_init(this);
			});
			window.Main.prototype.loadIcons();
			window.Main.prototype.svg_tip();
			window.Main.prototype.tips_slider();
		});
	}

}) ( window.jQuery);
