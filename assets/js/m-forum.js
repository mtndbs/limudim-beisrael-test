( function ($){

	MP.forum_tabs = function(){

		var els = [],
			tabs = document.querySelectorAll('[data-tab-content]');

		if ( ! tabs.length ) return;

		var F = function ( item, c ){ this.item = item; this.content = c },
			Fp = F.prototype;

		Fp.toggle_tabs = function(){
			
			var _self = this;
			var _btn = this.item;

			_btn.addEventListener( 'click', function(){

				$( els ).not( _self.content ).each( function(){
					$(this).css('display','none');
					$(this).attr('aria-hidden','true');
				});

				$( _self.content ).fadeIn(700);

				$(tabs).not(this).removeClass( 'is-active' );
				$(this).addClass( 'is-active' );

			});

		};

		[].forEach.call( tabs, function( tab ){

			var content_id = tab.getAttribute('data-tab-content'),
				content = document.getElementById(content_id);

			content && els.push( content );

			lib.run_all( new F( tab, content ) );
			
		});

		tabs[0].click();
		
	};

	MP.forum_item = function(){

		var _self = this;

		var items = document.querySelectorAll( '.forum-item' );

		if ( ! items.length ) return; 

		var F = function ( item ){ this.item = item; },
			Fp = F.prototype;

		Fp.print_section = function(){

			var _F = this;

			var btn = this.item.querySelector('.btn-forum-print');
			
			btn && btn.addEventListener('click', function(){
				lib.print( _F.item );
			});

		};

		$('.btn-toggle-forumContent').toggleView(
			'.fourm-body', 150, 
			{
				before : function(data){
					if( ! data.active ) {
						data.btn.parents('.forum-item').addClass('is-active');
					}
				},
				after : function(data){
					if( ! data.active ) {
						data.btn.parents('.forum-item').removeClass('is-active');
					}
				}
			}			
		);

		[].forEach.call( items, function( item ){
			
			lib.run_all( new F( item ) );

		});

	};

	MP.mobile_toggle_tabs_or_search = function(){

		var $show_search = $('.toggle-forum-header'),
			$hide_search = $('.close-forum-search');

		$show_search.length &&  $show_search.on( 'click', function(){
			$('.forums-forms-tabs').hide();
			$('.forums-form-search-h').removeClass('is-hidden--mobile');
		});
		$hide_search.length &&  $hide_search.on( 'click', function(){
			$('.forums-forms-tabs').show();
			$('.forums-form-search-h').addClass('is-hidden--mobile');
		});

	};

	MP.forum_comment_tip_mobile = function(){
		
		var _self = this;

		lib.on('resize', function(){

			$('.forum-comment-desc').each ( function(){

				if ( lib.viewport().width <= mobile ) {

					$(this).removeClass('svg-tip-right').addClass('svg-tip-top');	

				} else {

					$(this).removeClass('svg-tip-top').addClass('svg-tip-right');	

				}

				requestAnimationFrame(function(){

					_self.svg_tip();

				});
 
			});

		});
	};

	MP.forum_add_comment = function(){

		var refs = document.querySelectorAll( '.btn-forum-addComment' );

		if ( ! refs.length ) return;
		
		var style = document.createElement('style'),
			em = 1.55 / 2;
		document.body.appendChild(style);
//npm install malihu-custom-scrollbar-plugin@3.1.13 --save-dev
		$(refs).toggleView(
			'.add-comment',
			0, 
			{ 
				before : function (data){
					lib.on('resize', function(){
						var btn = data.btn[0];
						var formula = btn.getBoundingClientRect().left - btn.parentNode.getBoundingClientRect().left + (btn.offsetWidth/2);
						style.innerHTML = (
							'.add-comment .top-tip {left: calc('+formula+'px - '+ em +'em) };'
						);
					},30);

				}
			}
		);
		

	};

})(window.jQuery);