window.Popup = function(id,title){
	this.title = title;
	this.id = id;
	this.popup 					= document.createElement('div');
	this.popup_wrap				= document.createElement('div');
	this.popup_body 			= document.createElement('div');
	this.popup_scroller			= document.createElement('div');
	this.popup_close 			= document.createElement('button');
	this.popup_header			= document.createElement('header');
	this.popup_close_overlay 	= document.createElement('div');
	this.content_holder;

	this.start = (function(){
		for(var key in this){
			if(typeof this[key] === "function" && key.indexOf('_') !== 0){
				this[key]();
			}
		}
	}.bind(this))();

};

( function ( $ ){

	var Pp = Popup.prototype;

	Pp._show_popup = function( btn ){

		var _self = this,
			id = this.id ? this.id : btn.getAttribute('data-popup'),
			title = this.title ? this.title : btn ? btn.getAttribute('data-popuptitle') : '';

		_self._return_html_to_original_location();

		var content_holder = document.getElementById( id );

		this.content_holder = content_holder;

		if ( ! content_holder ){
			console.log('Related content does not exist.');
			return;
		}

		while ( content_holder.firstChild ){
			this.popup_scroller.appendChild ( content_holder.firstChild );
		}

		$( this.popup ).fadeIn( 200 );

		[ this.popup_close_overlay , this.popup_close ].forEach(function( btn ){
			btn.addEventListener( 'click', function(){
				_self._close_popup();
			});
		});

		if ( title ) {
			this.popup_header.className = 'l-flex popup-header';
			this.popup_header.innerHTML = '<h2 class="norm-title l-fg1 popup-title">' + title + '</h2>';
			this.popup_body.insertBefore( this.popup_header, this.popup_body.firstChild );
		}
		document.body.classList.add( 'is-popup-active' );
		document.body.setAttribute('data-popupactive' , id );

		this.popup.id = 'popup-id-' + id;
		
		document.addEventListener('keyup', function(e){
			if( e.which == 27 ){
				_self._close_popup();
			}
		});

		this.scroller_height();

		document.body.style.overflow = 'hidden';

	};

	Pp._close_popup = function(){

		var _self = this;
		
		$( this.popup ).fadeOut( 200 , function(){

			_self._return_html_to_original_location();
			document.body.classList.remove( 'is-popup-active' );
			document.body.removeAttribute( 'data-popupactive' );

			document.body.style.overflow = '';

		});
		
	};

	Pp._return_html_to_original_location = function(){
		
		if ( ! this.content_holder ) return;
		
		while ( this.popup_scroller.firstChild ){

			this.content_holder.appendChild ( this.popup_scroller.firstChild );

		}

	};

	Pp.popup_structure = function(){
		
		var _self = this;

		this.popup.className = 'l-spread l-center js-popup';
		this.popup.style.display = 'none';
		this.popup.setAttribute( 'aria-hidden', 'true' );
		this.popup.setAttribute( 'role', 'alert' );

		
		this.popup_wrap.className = 'l-layer-up popup-wrap'; 		
		
		this.popup_body.className = 'l-column popup-body';

		this.popup_scroller.className = 'l-fg1 h100 popup-scroller';

		this.popup_close.className = 't-hover js-popup-btn-close';
		this.popup_close.setAttribute( 'aria-label', lib.translation('סגור','close'));

		this.popup_close_overlay.className = 'l-spread';



		this.popup_body.appendChild(this.popup_scroller);

		this.popup_wrap.appendChild(this.popup_body);
		this.popup_wrap.appendChild(this.popup_close);

		this.popup.appendChild( this.popup_wrap );
		this.popup.appendChild( this.popup_close_overlay );
		
		document.body.appendChild( this.popup );

	};

	Pp.scroller_height = function(){
		var _self = this;
		function make(){
			
			if ( _self.popup_body.offsetHeight > _self.popup.clientHeight ){
				console.log(_self.popup_body.offsetHeight , _self.popup.clientHeight );
				_self.popup_body.classList.add('h100');
				_self.popup_wrap.classList.add('h100');
				
			} else {

				//_self.popup_body.classList.remove('h100');
				//_self.popup_wrap.classList.remove('h100');

			}
			

		}
		window.addEventListener('resize', make );
		window.setTimeout( make, 20 );
	};

	Pp.init = function(){

		var btns = document.querySelectorAll('[data-popup]');

		var _self = this;
	

		btns.length && [].forEach.call( btns , function( btn ){

			btn.addEventListener( 'click' , function(e){
				
				e.preventDefault();

				_self._show_popup( this );

			});
		});

		this.id && _self._show_popup();
	};


}(window.jQuery) );


window.popup = new Popup();
