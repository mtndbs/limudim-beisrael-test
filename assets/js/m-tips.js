( function ( $ ) {
	jQuery.fn._reverse = [].reverse;

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

	MP.tips_slider = function() {

		var right = ! lib.ltr() ? 'right' : 'left';
		var left =  lib.ltr() ? 'right' : 'left';

		function makePlaceholdersForAjax($slider) {
			var totalItems = $slider[0].dataset.ajaxTotalItems || 9999
			var slideCount = $slider.slick('getSlick').slideCount;
			var placeholderTemplateTarget = $slider[0].dataset.ajaxPlaceholder;
			var placeholderTemplate = $(placeholderTemplateTarget).html();
			var tempTemplate = document.createElement('div');
			var slidesToScroll = $slider.slick('getOption', 'slidesToScroll');
			var slidesUntilTotal = totalItems - slideCount;

			if (slidesUntilTotal > 0) {
				if (slidesUntilTotal < slidesToScroll) {
					slidesToScroll = slidesUntilTotal;
				}
			} else {
				slidesToScroll = 0;
			}

			for ( var i = slideCount; i < slideCount + slidesToScroll; i++ ) {
				tempTemplate.innerHTML = placeholderTemplate;
				tempTemplate.className = 'slickItemInstanceId-' + i;

				$slider.slick('slickAdd', '<div><div>' + tempTemplate.outerHTML + '</div></div>');
			}
		}

		function registerAjaxHandler($slider) {
			var ajaxHandler = $slider[0].dataset.ajaxFunction;
			var isNext;

			$slider.on('beforeChange',function(event, slick, currentSlide, nextSlide) {
				isNext = false;
				var slidesToScroll = $slider.slick('getOption', 'slidesToScroll');

				if (nextSlide > currentSlide && nextSlide - currentSlide === slidesToScroll) {
					isNext = true;
				}

				if (isNext) {
					// Is last slide?
					var slidesCount = slick.slideCount - 1;

					var isLast = (slidesCount - nextSlide === slidesToScroll - 1);

					if ( isLast ) {
						// Make next placeholders - infinitely.
						makePlaceholdersForAjax($slider);
					}
				}
			});

			$slider.on('afterChange', debounce(function(event, slick, nextSlide) {
				try {
					window[ajaxHandler]($slider);
				} catch (e) {
					console.error(e);
				}
			}, 100));
		}

		function setAjaxHandlerForSlider($slider) {
			var ajaxHandler = $slider[0].dataset.ajaxFunction;

			if ( ! ajaxHandler ) {
				return;
			}

			$slider.on('init reInit', function() {
				$slider.find('[class^="slickItemInstanceId"]').closest('.slick-slide').addClass('slick-slide-center');
			});

			makePlaceholdersForAjax($slider);
			registerAjaxHandler($slider);
		}

		function makeSlick($slider) {
			$slider.slick({
				rtl: ! lib.ltr(),
				speed: 1000,
				dots:false,
				prevArrow : '<button class="slider-btn is-prev">'+ new SvgIcons().render('slider-arr-'+right) +'</button>',
				nextArrow : '<button class="slider-btn is-next">'+ new SvgIcons().render('slider-arr-'+left) +'</button>',
				swipe : true,
				fade : false,
				autoplay: false,
				cssEase : ease,
				slidesToShow : 2,
				slidesToScroll : 2,
				accessibility : false,
				responsive: [
					{
						breakpoint: mobile + 1,
						settings: {
							slidesToScroll: 1,
							slidesToShow : 1,
							centerMode: true,
							centerPadding: '3em',
							speed: 500
						}
					},

				]
			});
		}

		$('.tips-list').each(function(){
			if (this.dataset.tip_slider_ready) {
				return;
			}

			var $slider = $(this);

			makeSlick($slider);
			setAjaxHandlerForSlider($slider);

			$slider.parents('.t-part').addClass('has-slider');

			this.dataset.tip_slider_ready = true;
		});

	};

	window.slick_load_ajax = function(url, args, cb) {
		var content;

		$.ajax({
			url: url,
			type: 'GET',
			data: args,
			async: true,
			dataType: 'json',
			success: function(data) {
				cb(data);
			},
			error: function() {
				cb(null);
				console.error('Error in tip ajax request.')
			},
		});

		return content;
	}

	window.slick_ajax_callback = function($slider) {
		var $activeSlides = $slider.find('.slick-active');

		var $itemsToLoad = $activeSlides.filter(function() {
			var $slide = $(this);
			var needLoading = $slide.find('[class^="slickItemInstanceId"]').length;

			return needLoading;
		});

		if ( $itemsToLoad.length ) {
			var itemIndexes = $itemsToLoad.map(function() {
				return this.dataset.slickIndex;
			}).toArray();

			slick_load_ajax($slider[0].dataset.ajaxUrl, { itemIndexes: itemIndexes }, function(itemResponse) {
				$itemsToLoad.each(function() {
					var slide = this;
					var index = slide.dataset.slickIndex;
					var instanceId = '.' + $(slide).find('[class^="slickItemInstanceId"]')[0].className;

					// slick sometimes clones the element.
					// So need to find all instances.
					var $instancesToUpdate = $(instanceId);
					var content = 'Error occurred';

					if (itemResponse && itemResponse[index]) {
						content = itemResponse[index];
					}

					$instancesToUpdate.parent().html( content );

					$(slide).removeClass('slick-slide-center');
				});

				// Init things.
				$slider.find('.lazy_load:not(.loaded)').each(function() {
					window.lazy_load_init(this);
				});
				window.Main.prototype.loadIcons();
				window.Main.prototype.svg_tip();
				window.Main.prototype.content_rating();
			});
		}
	};

}) ( window.jQuery);
