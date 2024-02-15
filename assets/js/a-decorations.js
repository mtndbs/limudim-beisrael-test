

( function ( $ ) {

	MP.decorations = function(){

		var read_more_html = function( text ){
			return '<div class="t-hover l-center">' +
						'<i class="t-bullet svgIcon icon-plus">' + new SvgIcons().render('plus') + '</i>' +
						'<u>' + text + '</u>' +
					'</div>';
		}

		$('.read-more').each(function(){
			var $it = $(this),
				text = $it.text(),
				html = read_more_html( text );
			
			$it.addClass('norm-a l-ibm').html( html );

		});

		$('.all-answers-list').each(function(){
			
			var $lis = $(this).children();

			$lis.prepend('<i class="t-bullet svgIcon icon-q">' + new SvgIcons().render('q') + '</i>');
			
		});

		$('.tips-item-qt').each(function(){
			$(this).
				prepend( '<i class="svgIcons icon-q-t qt-mark">' + new SvgIcons().render('q-t') + '</i>' ).
				append( '<i class="svgIcons icon-q-b qt-mark">' + new SvgIcons().render('q-b') + '</i>' );
		});

		$('[data-icon]').each(function(){
			var $it = $(this),
				icon = $it.data('icon');
			
			if ( $it.find('.t-bullt').length ) return; 
			
			$it.html(
				'<span class="l-blcok l-flex f-c">' +
					'<i class="l-block l-rela l-shrink t-bullet svgIcon icon-' + icon + '">' + new SvgIcons().render( icon ) + '</i>' +
					'<span class="l-block l-fg1">' + $it.html() + '</span>' +
				'</span>'
			);

		});
		
		// insert v shaped bullets into list items

		document.querySelector('.header-internal-desc, v-bullets') &&

		$( '.header-internal-desc, v-bullets' ).each(function(){

			var uls = this.querySelectorAll('ul');

			uls.length && [].forEach.call( uls, function( ul ){

				ul.classList.add('norm-ul');

				var lis = ul.querySelectorAll('li');

				lis.length && [].forEach.call( lis, function( li ){

					var bullet = document.createElement('i');
					bullet.className = 'svgIcon icon-v';
					bullet.innerHTML = new SvgIcons().render('v');

					li.insertBefore( bullet, li.firstChild );
					li.classList.add( 'has-v-bullet' );

				});

			});

		});
		
		$('.forums-cat-link').each(function(i){
			var $it = $(this),
				path = '',
				className = '';
			
			if ( i % 2 ){
				path = 	'<path d="M0 0 L0 100 L100 0"/>';
				className = 'is-even-alignment';
			} else {
				path = 	'<path d="M0 100 L100 0 L100 100"/>';
				className = 'is-odd-alignment';

			}

			var tip = 	'<svg width="100px" height="100px" viewbox="0 0 100 100" class="top-tip" preserveAspectRatio="none">'+
							path +
						'</svg>';
			
			var border_y = 	'<span class="border-y l-flex">' +
								'<span class="cell cell-1"></span>' +
								'<span class="cell l-rela svg-hold">' + tip + '</span>' +
								'<span class="cell cell-3"></span>' + 
							'</span>' ;
			$it.addClass('l-rela '+ className ).prepend( border_y );

		});

		$('.header-about-bottom-sep').each(function(i){
			var $it = $(this),
				path = '',
				className = '';
		
			path = 	'<path d="M0 0 L50 100 L100 0"/>';

			var tip = 	'<svg width="100px" height="100px" viewbox="0 0 100 100" class="top-tip" preserveAspectRatio="none">'+
							path +
						'</svg>';
			
			var border_y = 	'<span class="border-y l-flex">' +
								'<span class="cell cell-1"></span>' +
								'<span class="cell l-rela svg-hold">' + tip + '</span>' +
								'<span class="cell cell-3"></span>' + 
							'</span>' ;
			$it.addClass('l-rela '+ className ).prepend( border_y );

		});

	};
	MP.svg_tip = function(){

		$('.svg-tip , .svg-tip-down, .svg-tip-right, .svg-tip-top').each(function(){

			if (this.dataset.svg_tip_ready) {
				return;
			}
			
			var $it = $(this),
				className = '',
				path = '';
				
			if ( $it.find('.top-tip').length ){
				$it.find('.top-tip').remove();
			}
			
			if ( $it.hasClass('svg-tip-down')){
				
				path = 	'<path d="M0 0 L100 100 L100 0"/>';
				className = 'tip-down';

			} else if($it.hasClass('svg-tip-right')){

				path = 	'<path d="M0 0 L100 0 L0 100"/>';
				className = 'tip-right';			

			} else {

				path = 	'<path d="M0 100 L100 0 L100 100"/>';
				className = 'tip-top';

			}

			if ( $it.hasClass('tip-equilateral') ){
				path = '<path d="M 0 100, 50,0 100,100"/>';
			}
			var tip = 	'<svg width="100px" height="100px" viewbox="0 0 100 100" class="top-tip ' + className + '" preserveAspectRatio="none">'+
							path +
						'</svg>';

			
			$it.addClass('l-rela').prepend( tip );

			this.dataset.svg_tip_ready = true;
		});

	};

})(window.jQuery);
