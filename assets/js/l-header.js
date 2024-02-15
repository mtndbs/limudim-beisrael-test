( function ( $ ) {

	MP.sticky_header = function(){

		var header = document.getElementById('site-top');
		var secondaryHeader = document.querySelector('.secondary-header');
		var secondaryHeaderSearchForm = document.querySelector('.secondary-header__search-form');

		if ( !header ) return;
		
		lib.on( ['load','resize','scroll'] ,function(){

			header.style.top = lib.offset('#wpadminbar') + 'px';
			secondaryHeader.style.top = lib.offset('#wpadminbar') + 'px';

			if (window.pageYOffset > 0 ){
				document.body.classList.add('is-sticky-header');
			} else {
				document.body.classList.remove('is-sticky-header');
			}

			if ( window.pageYOffset > header.offsetHeight + 100 ) {
				secondaryHeader.classList.add('visible');
			} else {
				secondaryHeader.classList.remove('visible');
				secondaryHeaderSearchForm.classList.remove('visible');
			}
			
		});
	};

	MP.header_pad = function(){
		
		var header_componsate = document.querySelectorAll('.header-componsate'),
			header = document.getElementById('site-top');

		header_componsate.length && [].forEach.call ( header_componsate , function( el ){
			lib.on( ['load','resize','scroll'] ,function(){
				if ( window.matchMedia('(max-width: 1000px)').matches ) {
					el.style.paddingTop = header.offsetHeight + 'px';
				}
			},800);
		});

	};

	function Mobile_Menu(args){
		this.holder = document.querySelector(args.holder);
		this.btn = document.querySelector(args.btn);
		this.additional_html_btns = args.additional_html_btns;
		this.additinal_html_panels = args.additinal_html_panels;
		this.menu_list_hold = document.createElement('div');
		this.menu_attachments_btns_hold = document.createElement('div');
		this.menu_attachments_panels_hold = document.createElement('div');
		this.fold = args.fold;
		this.menu = document.createElement('div');
		this.name = args.name;
		this.append = document.querySelector(args.append) || document.body;
	}

	var MMp = Mobile_Menu.prototype;	

	MMp.structure = function(){
		 
		if ( ! this.holder ) return;

		this.menu.className = 'mobile_menu ' + this.name;
		var column = document.createElement('div');
		column.className = 'h100 l-column';
		this.menu.appendChild(column);
		this.menu_list_hold.className = 'l-fg1-h0 w100 menu-list-hold';
		this.menu_attachments_btns_hold.className = 'w100 mobile_menu_bottom';
		this.menu_attachments_panels_hold.className = 'w100 mobile_menu_bottom'; 

		column.appendChild(this.menu_list_hold);
		column.appendChild(this.menu_attachments_panels_hold);
		column.appendChild(this.menu_attachments_btns_hold);
		
		this.append.appendChild( this.menu);
		
		$(this.holder).mobileDisplace( this.menu_list_hold , this.fold ,'append');
		$(this.additinal_html_panels).mobileDisplace( this.menu_attachments_panels_hold , this.fold ,'append');
		$(this.additional_html_btns).mobileDisplace( this.menu_attachments_btns_hold , this.fold ,'append');
		
	};
	MMp._mobile_menu_top = function(){
		var offset_string = '#wpadminbar,#site-top',
			_self = this;
		lib.on( 'resize' , function(){
			_self.menu.style.top = lib.offset( offset_string ) + 'px';
			_self.menu.style.height = lib.viewport().height - lib.offset( offset_string ) + 'px';
		});
	};
	MMp.mobile_menu_sub = function(){
		
		if ( ! this.holder ) return;

		var lis = this.holder.querySelectorAll('li');
		
		if ( ! lis.length ) return;

		[].forEach.call( lis , function( li ){
			
			var ul = li.querySelector('ul');
			
			if(!ul) return;

			ul = $(ul);

			var open_sub = document.createElement('button'),
				aria_hidden = ( lib.viewport().width < tablet ) ? 'true' : 'false';

			open_sub.className = 'open_sub';
			open_sub.setAttribute('aria-hidden',aria_hidden);

			var a = li.querySelector('a');

			a.appendChild( open_sub );

			open_sub.addEventListener('click',function(e){
				e.preventDefault();  
				$(this).toggleClass('is-on');
				var slideDir = ul.css('display') == 'none' ? 'Down' : 'Up';
				ul['slide' + slideDir](200);
			});

		});

	};
	MMp.mobile_meu_open = function(){
		if ( ! this.btn ) return;
		var _self = this;
		
		$( this.btn ).menuBtn(42/106);

		this.btn.addEventListener('click',function(){

			$('#open_mobile_search.is-active').trigger('click');
			
			$(this).toggleClass('is-active');
			$('body').toggleClass('is-' + _self.name + '-active');

			if ( $(this).hasClass('is-active') ){
				_self._mobile_menu_top();
			} else {
				setTimeout ( function(){
					_self.menu.removeAttribute('style');
				},400);
			}

		});
	};
	
	MMp.swipe_support = function(){
		
		if ( ! this.holder ) return;

		var _self = this;

		$( this.holder ).swipe({
			swipeRight : function(){
				_self.btn.click();
			}
		});
	};


	var main_menu = new Mobile_Menu({
		holder : "#main_menu",
		btn : "#open_mobile_menu",
		fold : tablet,
		name : 'main-menu',
		additional_html_btns : '.top-main_panel-menu',
		additinal_html_panels : '#personal_advice_for_mobile'
	});

	lib.run_all( main_menu );

	MP.toggle_search_display = function(){
		$('#show_mobile_search').on('click',function(){
			var $search = $(this).parent().find('.search_site');
			$search.toggleClass('is-shown');
		});
	};

	MP.a11y_btn = function(){

		$('.header-internal + .t-part').prepend( '<div id="has-mobile-a11y-btn"></div>' );
		$('#a11y-menu-btn').on('click',function(){

			var real = document.querySelector(' .iAccessibility-menu-button '),
				panel =$('#iAccessibility-menu,.iAccessibility-menu-button');
			if ( ! real ) return;

			real.click();
			panel.css({top : lib.offset('#wpadminbar , #site-top')});

			if ( document.getElementById('close_acc')) return;

			var close = document.createElement('button');
			close.id = "close_acc";
			close.textContent = "X";
			var accMenu = document.getElementById('iAccessibility-menu');
			accMenu.appendChild(close);
			close.addEventListener('click',function(){
				real.click();
			});

		});	
		$('#a11y-menu-btn').mobileDisplace( '#has-mobile-a11y-btn', mobile ,'prepend');
	
	};

	MP.mobile_search_toggle = function(){

		var $btn = $('#open_mobile_search');

		$btn.on( 'click', function(e){
			e.stopPropagation();
			$(this).toggleClass( 'is-active' );
			$('#open_mobile_menu.is-active').trigger('click');
			$( 'body' ).toggleClass( 'is-mobile-search-display' );
		});

	};

	$('.secondary-header__search-button').on('click', function() {
		$('.secondary-header__search-form').toggleClass('visible');
	});

}) ( window.jQuery);