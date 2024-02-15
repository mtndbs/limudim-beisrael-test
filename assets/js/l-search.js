function Advanced_search( args ){

	this.url = args.url;
	this.$inputs = jQuery(args.inputs);
	this.mobile_appender = document.querySelector( args.mobile_appender );
	this.display_wrap = document.createElement('div');
	this.display = document.createElement('div');
	this.table_indexes = [];
	this.table_data_row;
	this.column_index = 0;
	this.column_link_index = -1;
	this.keyCode;
	this.event;
	this.focused_link;
	this.table_wrapper;
	this.scrollbar_offset = 0;
	this.active_column = 0;
	this.arrows = {
		left 		: 37,
		up 			: 38,
		right 		: 39,
		down 		: 40
	};

	this.start = (function(){
		
		if( ! this.$inputs.length ) return;

		for(var key in this){
			if(typeof this[key] === "function" && key.indexOf('_') != 0){
				this[key]();
			}
		}
	}.bind(this))();
}

( function ( $ ) {

	var As = Advanced_search.prototype;

	As._scrollbar_control = function(){
		
		if ( browser.mobile() ) return;

		var link = this.focused_link;

		var link_pos_bottom 		= link.getBoundingClientRect().bottom,
			wrapper_pos_bottom 		= this.table_wrapper.getBoundingClientRect().bottom,
			lind_pos_top 			= link.getBoundingClientRect().top,
			wrapper_pos_top 		= this.table_wrapper.getBoundingClientRect().top;
		
		if (  this.column_link_index < 3 ){

			$(this.table_wrapper).mCustomScrollbar( "scrollTo", 0 , {
				scrollInertia : 0,
			});

		}
		
		else if( link_pos_bottom > wrapper_pos_bottom ) {

			var scroll_formula = Math.abs( this.scrollbar_offset ) + wrapper_pos_bottom - wrapper_pos_bottom + 100;

			$(this.table_wrapper).mCustomScrollbar( "scrollTo", scroll_formula , {
				scrollInertia : 0,
			});
		}
		
		else if (lind_pos_top < wrapper_pos_top ){
			
			var scroll_formula = Math.abs( this.scrollbar_offset ) - ( lind_pos_top + wrapper_pos_top + 100);
			
			$(this.table_wrapper).mCustomScrollbar( "scrollTo",scroll_formula , {
				scrollInertia : 0,
			});
			
		}
		
	};

	As._arrow_navigation = function (){

		this.table_data_row = this.display.querySelector('table tr');

		if ( ! this.table_data_row ) return;

		$(this.table_data_row).find('a').removeClass('is-focused');	

		if ( this.keyCode === this.arrows.down ){
			if ( this.column_link_index <  this.table_indexes[this.column_index].links_per_column -1 ) {
				this.column_link_index++;
			}
		} 
		else if ( this.keyCode === this.arrows.up ) {
			this.column_link_index--;
		}
		else if ( this.keyCode === this.arrows.left ){
			if ( this.table_indexes[this.column_index+1] && this.column_link_index <= this.table_indexes[this.column_index+1].links_per_column ){
				this.column_index++;
			}
		}
		else if ( this.keyCode === this.arrows.right ){
			if ( this.table_indexes[this.column_index-1] && this.column_link_index <=  this.table_indexes[this.column_index-1].links_per_column -1 ) {
				this.column_index--;
			}
		}

		if ( this.column_index < 0 ) this.column_index = 0;
		if ( this.column_link_index < 0 ) this.column_link_index = 0;
		if ( this.column_index > this.table_indexes.length -1 ) this.column_index = this.table_indexes.length -1;

		var focused_td = this.table_data_row.children[this.column_index];
		
		if ( focused_td ){

			this.focused_link = this.table_data_row.children[this.column_index].querySelectorAll('a')[this.column_link_index];

			if ( this.focused_link ){

				this.focused_link.classList.add('is-focused');

				if ( this.column_link_index <= 1 ){
					this.scroll_start = false;
				} else {
					this._scrollbar_control();
				}

			}
		}

	};

	As._search_panel_position = function(){

		var _self = this;
		lib.on(['scroll','resize'], function(){
			
			var input = _self.$inputs[0];
			var pos_top = input.getBoundingClientRect().bottom,
				pos_left = input.parentNode.getBoundingClientRect().left,
				formula_left = pos_left - ( ( _self.display.offsetWidth - input.parentNode.offsetWidth ) / 2 );
			_self.display_wrap.style.top = pos_top + 'px';
			_self.display_wrap.style.left = formula_left + 'px';

			var self_pos_left = _self.display_wrap.getBoundingClientRect().left
			_self.display.style.left = ( self_pos_left < 0 ) ? Math.abs(self_pos_left) + 'px' : 0 + 'px';

		});

	};

	As.mobile_holder_height = function(){

		if ( ! this.mobile_appender ) return;

		var _self = this;

		window.addEventListener('load', function(){

			_self.mobile_appender.classList.remove('is-hidden--mobile');

		});

		function make (){
			
			if ( ! $('body').hasClass('is-mobile-search-display')) return;

			if ( lib.viewport().width <= tablet ){
				_self.mobile_appender.style.height = lib.viewport().height - lib.offset('.top-logo') + 'px';
			} else {
				_self.mobile_appender.style.height = '';
			}
		}

		window.addEventListener('load',make);
		window.addEventListener('resize',make);

		$('#open_mobile_search').on('click',function(){
			requestAnimationFrame(make);
		});
	};

	As.mobile_holder_buttons = function(){

		if ( ! this.mobile_appender ) return;

		var _self = this;
		var panel = document.createElement('div');
		panel.className = 'l-flex mobile-search-panel';
		panel.innerHTML = 	'<button class="l-fg1-w0 mobile-search-show_column is-active" data-column="0">' +
								'<i class="icon-dots">' + new SvgIcons().render('dots') + '</i>' + 
								'מסלולי לימוד' +
							'</button>' +
							
							'<button class="l-fg1-w0 mobile-search-show_column" data-column="1">' +
								'<i class="icon-dots">' + new SvgIcons().render('dots') + '</i>' + 
								'מוסדות לימוד' +
							'</button>' ;

		this.mobile_appender.appendChild ( panel );

		var $panel_btns = $('.mobile-search-show_column');

		$panel_btns.on('click', function(){

			var $it = $(this),
				index = $it.data( 'column' );
			$('.search-results-column').removeClass('is-shown');
			$('.search-results-column').eq(index).addClass('is-shown');

			$panel_btns.removeClass('is-active');
			$it.addClass('is-active');
			
			_self.active_column = index;

		});
	};

	As._display_search_results = function ( data, input ){

		lib.on('resize',function(){
			if ( lib.viewport().width <= tablet ){

				input.parentNode.parentNode.appendChild( this.display_wrap );

			} else {

				document.body.appendChild( this.display_wrap );

			}
		}.bind(this));

		this.display_wrap.id = 'search-results-wrap';
		this.display_wrap.appendChild( this.display );

		this.display.id = 'search-results'
		this.display.style.direction = 'rtl';
		this.display.innerHTML = data;

		var _self = this;

		this.table_data_row = this.display.querySelector('table tr');

		if ( this.table_data_row ) {

			this.table_wrapper = this.display.querySelector('.search-results');

			var	immediate_cells = this.table_data_row.children;

			// remvoe empty decorative cells
			$( immediate_cells ).filter( function (){
				return this.textContent.trim() === ''; 
			}).remove();
			$( this.table_data_row ).find('td,a').removeAttr('style');
			$( this.table_data_row ).find('a').each(function(){
				$(this).html('<span class="l-td-m w100">' + $( this ).html() + '</span>');
			});

			this.table_indexes = [];

			immediate_cells && [].forEach.call( immediate_cells , function ( cell , i ){
				cell.classList.add('search-results-column');
				i === _self.active_column && cell.classList.add('is-shown');
				$(cell.querySelectorAll('table')).eq(0).addClass('search-results-column-thead');
				$(cell.querySelectorAll('table')).eq(1).addClass('search-results-column-tbody');
				this.table_indexes.push({
					column_index : i,
					links_per_column : cell.querySelectorAll( 'a' ).length
				});
			}.bind(this));

			!browser.mobile() && $( this.table_wrapper ).mCustomScrollbar({
				callbacks : {
					onScroll : function(){
						_self.scrollbar_offset = this.mcs.top ;
					}
				}
			});
		} else {

			this.display.innerHTML = '<div class="search-resulsts-no-results">לא נמצאו תוצאות</div>';

		}

		this._search_panel_position();

	};

	As._get_data = function( input, event ){

		var query = input.value;

		if ( ! query ) return;

		var _self = this;

		this.keyCode = event ? event.keyCode : undefined;
		
		this.event = event;

		if( ! lib.search_object( this.arrows , this.keyCode )) {

			$.get( this.url + escape ( query ) ,function(data){

				_self._display_search_results( data, input );			

			});
			
		} else {

			this._arrow_navigation();

		}
	};

	As.close_search = function(){

		var _self = this;
		document.addEventListener('mouseup',function(e){

			if ( lib.viewport().width <= tablet ) return; 

			if( ! $('#search-results, .top-search').above(e) ){
				$(_self.display_wrap).fadeOut( 200, function(){

					_self.display_wrap.innerHTML = '';
					_self.display_wrap.removeAttribute('style');

				});
			}
		});

	};
	As.query_data = function(){

		var _self 		= this;

		this.$inputs.on( 'focus' , function(){
			_self.column_index = 0;
			_self.column_link_index = -1;
		} );

		this.$inputs.on( 'keyup focus' , function( event ){
			
			_self._get_data(  this, event );

		});

		this.$inputs.on( 'keydown' , function( event ){

			if (event.repeat) { return }

			// on enter key press:
			if ( event.keyCode === 13 ) {
				event.preventDefault();
				_self.focused_link.click();
			}
		});
	};



})(window.jQuery);

new Advanced_search({
	inputs : '.top-search-field',
	mobile_appender : '.top-main_panel',
	//url : 'https://www.universities-colleges.org.il/globalinc/GetCatlive_search.asp?q='
	url : lib.base_url() + '/admin/search-results.php?q='
});
