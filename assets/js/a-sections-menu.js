function Sections_menu(args){
	this.selector = args.selector;
	this.menu = document.querySelector(args.selector);
	this.id_prefix = 'section_item-';
	this.items = document.querySelectorAll('[data-menutitle]');
	this.as = [];
}

var Sp = Sections_menu.prototype;

( function ( $ ) {

	Sp.print_menu = function(){
		
		if ( ! this.menu ) return;
		var _self = this;
		
		this.menu.classList.add('sections-anchor-menu');

		var ul = document.createElement('ul'); 
		ul.className = 'norm-ul l-center tabs-table';

		this.menu.appendChild( ul );

		this.items.length && [].forEach.call( this.items , function( item , i ){
			
			item.id = this.id_prefix + i ;

			var li = document.createElement('li');
			li.className = 'sections-anchor-menu-item';
			
			ul.appendChild( li );

			var a = document.createElement('a');
			a.className = 'norm-a t-hover sections-anchor-menu-link';
			a.textContent = item.getAttribute('data-menutitle');
			a.href = '#' + this.id_prefix + i ;

			this.as.push(a);

			a.addEventListener('click',function(e){
				
				e.preventDefault();

				_self._animate_scroll( a );

			});

			li.appendChild( a );

		}.bind(this));

	//	$(ul).slick( new Main().tabs_table_slider_args );


	};

	Sp._animate_scroll = function(a){

		var scrollto = document.getElementById( a.hash.replace('#','') );

		var formula = scrollto.getBoundingClientRect().top + window.pageYOffset - lib.offset('#site-top,' + this.selector ) ;

		scrollto && $('body,html').animate(
			{ 
				scrollTop : formula
			},
			300,
			function(){
				window.location.hash = a.hash;
				window.scrollTo( 0, formula );
			}
			
		);

	};

	Sp.fixed_on_scroll = function(){

		if ( !this.menu ) return;

		var before = this.menu.previousElementSibling || this.menu.parentNode,
			height_pl = document.createElement('div'),
			ofset_string = ( window.matchMedia('(max-width: 1000px)').matches ) ? '#site-top' : '#secondary_header',
			_self = this;
				
		before.parentNode.insertBefore ( height_pl , this.menu );

		function make(){
			if( height_pl.getBoundingClientRect().top <  lib.offset(ofset_string) ){
				_self.menu.classList.add( 'is-fixed');
				_self.menu.style.top = lib.offset(ofset_string) + 'px';
				height_pl.style.height = _self.menu.offsetHeight + 'px';
			} else {
				_self.menu.classList.remove( 'is-fixed');
				_self.menu.style.top = '';
				height_pl.style.height = '';
			}
			
			[].forEach.call( _self.items , function( item , i){
				 	
				$(_self.as[i]).removeClass('is-active');
				
				if(	
					item.getBoundingClientRect().top - 1 < lib.offset(ofset_string + ', #sections_menu') &&
					item.getBoundingClientRect().bottom - 1 > lib.offset(ofset_string + ', #sections_menu')
				){
					
					_self.as[i].classList.add('is-active');

				}

			});
		}
		make();
		window.addEventListener('scroll',make);
		window.addEventListener('resize',make);

		$('.btn-open-top-menu').on('click',function(){

			var then = new Date().getTime();
			var interval = setInterval(function(){
				
				make();

				var now = new Date().getTime();
				if ( now > then + 500 ){
					clearInterval(interval);
				}

			},20);
		});
		
	};

	lib.run_all(new Sections_menu({
		selector : '#sections_menu'
	}));


})(window.jQuery);