( function ( $ ) {

	MP.content_rating = function(){

		// setup stars html
		
		$('[data-stars]').each(function(){
			if (this.dataset.stars_ready) {
				return;
			}

			var $it = $(this),
				stars = $it.data('stars'),
				html = '';
			$it.addClass('l-flex');
			for ( var i = 0; i < stars; i++){
				html += '<i class="rate_us svgIcon icon-star-active">' + new SvgIcons().render ( 'star-active' ) + '</i>';
			}
			$(this).html( html );

			this.dataset.stars_ready = true;
		});

		var stars = Array.prototype.slice.call( document.querySelectorAll('.rate_us') );

		function activate_stars( stars, classOp, type ){
			[].forEach.call( stars,  function(star){
				star.classList[classOp](type);
			});
		}

		stars.length && stars.forEach( function( star, i ) {
			if (star.dataset.star_ready) {
				return;
			}

			star.classList.add( 'svgIcon', 'icon-star-inactive', 't-hover' );
			
			activate_stars(star, 'inactive');

			var befores = stars.slice( 0 , i+1 ),
				afters = stars.slice( i+1 , stars.length ),
				all = stars.slice( 0 , stars.length );

			$(star).on( 'click mouseenter' , function(e){
				
				e.preventDefault();
				
				activate_stars(befores, 'add', 'active-' + e.type);
				
				activate_stars(afters, 'remove', 'active-' + e.type);
				
			});

			$(star).on( 'mouseleave' , function(e){
				activate_stars(stars, 'remove', 'active-mouseenter');
			});

			star.dataset.star_ready = true;
		});

	};
	MP.content_sidebar_tips_slider = function(){
		var right = ! lib.ltr() ? 'right' : 'left';
		var left =  lib.ltr() ? 'right' : 'left';

		$('.w-tips-slider').each(function(){
			
			var $slider = $(this);

			$slider.slick({ 
				rtl: ! lib.ltr(),
				speed: 500,
				dots:false,
				prevArrow : '<button class="slider-btn is-prev">'+ new SvgIcons().render('slider-arr-'+right) +'</button>',
				nextArrow : '<button class="slider-btn is-next">'+ new SvgIcons().render('slider-arr-'+left) +'</button>',
				swipe : true,
				fade : false,
				autoplay: false,
				cssEase : ease,
				slidesToShow : 1,
				slidesToScroll : 1,
				accessibility : false,
			}); 

		});

	};

	MP.content_sidebar_show_form = function(){

		var items = document.querySelectorAll( '.w-inst-item' );

		items.length && [].forEach.call ( items , function( item ){

			var $btn = $(item).find('.w-inst-toggleForm'),
				$content = $(item).find('.w-inst-form-hold');

			$btn.on('click', function(){

				var $it 		= $(this),
					cond 		= $content.css('display') === 'none',
					effect 		= cond ? 'Down' : 'Up',
					hidden 		= cond ? 'false' : 'true',
					$holder 	= $it.parents('.cont-institutes').eq(0);

				$content.attr('aria-hidden',hidden);
				$content['slide' + effect](200);

				if ( $holder.length && lib.viewport().width <= mobile ) {
					$holder.find('.is-active').not($(this)).trigger('click');
				}

				$it.toggleClass( 'is-active' );
				$it.parents('.w-inst-item').toggleClass( 'is-active' );

			});

		});
	};

	MP.mobile_read_more = function(){

		var bool = true;

		$('.show_full_article_content').each(function() {
			this.dataset.activetext = $(this).find('u').text();
		})
		.on( 'click', function(){
			var $it = $(this),
				$it_u = $it.find('u'),
				$article = $it.parents( '.content-table-main' ),
				$footer = $it.parents( '.article-footer' ),
				original_text = this.dataset.activetext,
				original_height = $article.height();

			$article.css('height','auto');
			var auto_height = $article.height();
			$article.css('height','');

			if ( bool ){

				$article.velocity({height : auto_height + 'px'}, function(){
					$article.css('height','auto');
				});

				$it_u.text( $it.data('inactivetext') );

				$footer.addClass('is-content-shown');

			} else {

				$article.velocity({height : original_height + 'px'}, function(){
					$article.css('height','');
				});

				$it_u.text( original_text );

				$footer.removeClass('is-content-shown');

			}

			bool = ! bool;

		}).trigger('click');
	};

}) ( window.jQuery);
