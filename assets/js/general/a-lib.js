import {symbols} from "./../../icons/symbols.js";
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';
import 'jquery-mousewheel';
import 'malihu-custom-scrollbar-plugin';
require('velocity-animate');


if (!window.location.origin) {
  window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? (':' + window.location.port) : '');
}

var Browser_data = function() {
	this.moz = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	this.chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	this.mobile =  function() {
		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	};
	this.detect_ie = function(){
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf('MSIE ');
		var trident = ua.indexOf('Trident/');
		var bool;
		if (msie > 0) {
			bool = 'ln10';
		} else if (trident > 0) {
			bool =  true;
		} else {
			bool = false;
		}
		return bool;
	},
	this.fuie = this.detect_ie() === true || this.detect_ie() === 'ln10';
};
window.browser = new Browser_data();
function browser_print(){
	if(browser.fuie){
		document.body.className += " fuie";
	}  if(browser.moz){
		document.body.className += " moz";
	}  if(browser.chrome){
		document.body.className += " chrome";
	}  if (browser.mobile()) { 
		document.body.className += " mobile";
	}
};browser_print();

(function c2c(){
	var a = document.querySelectorAll('a[href^="tel"]');
	if(!a.length) return;
	if(browser.mobile()) return;
	[].forEach.call(a,function(el){
		el.addEventListener('click',function(e){ 
			e.preventDefault();
		});
	});
})();


function Lib(){
	this.viewport = function(){
		var e = window, a = 'inner';
		if (!('innerWidth' in window )) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
	};
	this.each = function(nl,callback){
		var nodes = document.querySelectorAll(nl),
			nodes_array = Array.prototype.slice.call(nodes);
		nodes_array.forEach(function(e){
			if(typeof callback === "function") callback(e);
		});
	};

}
Lib.prototype.dir = function(){
	var x;
	if(window.getComputedStyle(this.od-wrapper,null).getPropertyValue('direction')){
		x = "right";
	} else {
		x = "left";
	}
	return	x;
};
Lib.prototype.isScrolledIntoView = function(elem,margin) {
	margin = margin ? margin : 0;
	var elem_top_pos = elem.getBoundingClientRect().top + margin,
		window_height = this.viewport().height,
		elem_bottom_pos = elem.getBoundingClientRect().bottom - margin,
		first_con = elem_top_pos < window_height,
		second_con = elem_bottom_pos > 0;
	return first_con && second_con;
	
};
Lib.prototype.parentsUntil = function(el,parent_name){
    var parent = el.parentNode;
    while(parent.className.indexOf(parent_name) === -1){
        parent = parent.parentNode;
    }
    return parent;
};
Lib.prototype.compute_style = function(el,style,toint){
	if(toint) {
		 return parseInt(window.getComputedStyle(el,null).getPropertyValue(style));
	} else {
		return window.getComputedStyle(el,null).getPropertyValue(style);
	}
};
Lib.prototype.above = function(el,event){

	var cx = event.changedTouches ? event.changedTouches[0].pageX : event.clientX,
		cy = event.changedTouches ? event.changedTouches[0].pageY : event.clientY;
	return !((el.getBoundingClientRect().right < cx) || (el.getBoundingClientRect().left > cx) || 
		(el.getBoundingClientRect().top > cy) || (el.getBoundingClientRect().bottom < cy));

};
Lib.prototype.acc = function(args,bool){
	var el = args.selector;
	var speed = args.speed ? args.speed : 200;
	el.style.height = "auto";
	el.style.overflow = "hidden";
	var height = el.offsetHeight;
	el.style.height = "0px";
	el.style.transition = "height " + speed + "ms";
	el.style.webkitTransition = "height " + speed + "ms";
	if(bool){
		setTimeout(function(){
			el.style.height = height + "px";
			setTimeout(function(){
				el.style.height = "auto";
			},speed);
		},10);
	} else {
		el.style.height = height + "px";
		setTimeout(function(){
			el.style.height = "0px";
		},10);
	}
};
Lib.prototype.preventPageScrolling = function(e){
	e = e || window.event;
	e.preventDefault();
};
Lib.prototype.adminbar_height = function(){
	var adminbar = document.getElementById('wpadminbar');
	return adminbar ? adminbar.offsetHeight : 0;
};
Lib.prototype.offset = function( els ){
	if(typeof els === 'string') els = document.querySelectorAll(els);
	if ( ! els.length ) return 0;
	var minus = 0;
	[].forEach.call( els , function(item){
		minus += item.offsetHeight;
	}.bind(this));
	return minus;
};
Lib.prototype.commaSep = function() {
	return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
Lib.prototype.checkOverflow = function(el){
	var curOverflow = el.style.overflow;
	if ( !curOverflow || curOverflow === "visible" )el.style.overflow = "hidden";
	var isOverflowing = el.clientHeight < el.scrollHeight;
	el.style.overflow = curOverflow;
	return isOverflowing;
};
Lib.prototype.loadStyle = function(src){
	var first_css = document.head.querySelector('link[rel="stylesheet"]');
	var link = document.createElement('link');
	link.rel = "stylesheet";
	link.href = lib.base_url() + '/assets/js/vendor/css/'+ src +'.css';
	
	document.head.insertBefore(link,first_css);
};
Lib.prototype.kidnap = function ( kidnapper , parent ){
	while ( parent.firstElementChild ){
		kidnapper.appendChild ( parent.firstElementChild );
	}
};
Lib.prototype.run_all = function(obj){
	
	Object.keys( Object.getPrototypeOf( obj )).forEach(function(key){
		if(typeof obj[key] !== 'function') return;
		try{
			if(key.indexOf('_') === 0) return;
		} catch(err){
			console.log(err);
		}
		obj[key]();
	});

};
Lib.prototype.ltr = function(){
	return 	document.querySelector('html').getAttribute('dir') !== 'rtl' ;
};


Lib.prototype.when = function( callback ){

	if ( typeof callback !== 'function' ) return;

	var counter = 0;

	function attempt(){
		
		if( ! callback() || counter < 3000 ){
			requestAnimationFrame(attempt);
		} else {
			console.log('wtf');
			requestAnimationFrame( callback );
		}
		counter ++;

		console.log(callback());
	}

	
	attempt();

};


Lib.prototype.translation = function ( he , en ){

	if ( this.ltr() ){
		return en;
	} else {
		
		return he;
	}
};



Lib.prototype.bakery = {
	setCookie : function(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	},
	getCookie : function(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
};



Lib.prototype.merge = function(a,b) {
    for(var idx in b) {
        a[idx] = b[idx];
    }
};
Lib.prototype.getDataAttribute = function( item ){
	return [].filter.call(item.attributes, function(at) { return /^data-/.test(at.name); });
};

Lib.prototype.on = function( evts , callback , interval_count ){

	var delayedExec = function(after, fn) {
		var timer;
		return function() {
			timer && clearTimeout(timer);
			timer = setTimeout(fn, after);
		};
	};	

	try {
		function make(){

			if(typeof callback === 'function') callback();		
						
		}
		var after_event = delayedExec(20, function() {
			if ( typeof interval_count === 'number' ){

				var then = new Date().getTime();

				var interval = setInterval(function(){
					
					var now = new Date().getTime();

					if(typeof callback === 'function') callback();		
			
					if(now > then + interval_count + 20 ){
						clearInterval( interval ); 
					}

				},100);

			} else {
				if(typeof callback === 'function') callback();
			}
		});

		if ( interval_count !== false ) 	make();
		
		if ( typeof evts === 'string'){
			window.addEventListener( evts , make );
		} else {
			
			evts.forEach(function(e){
				window.addEventListener( e , function(){
					make();
					after_event();
				});
			});
			
		}

	} catch(err){console.log(err)}
};
Lib.prototype.search_object = function(obj, query ){
	if ( ! query  || ! obj ) return;

	var _obj = {};
	Object.keys( obj ).forEach( function(key){
		if ( obj[key].toString().toLowerCase() == query.toString().toLowerCase() ) _obj[key] = obj[key];
	});

	if ( Object.keys(_obj).length ) return _obj;
};
Lib.prototype.base_url = function(){
	var getUrl = window.location;
	/*temp start*/
	if ( window.location.origin.indexOf( 'onwebsite' ) !== -1 ) {
		return window.location.origin.split('/')[0] + '/limudim-beisrael' ;
	}
	/*temp end*/
	return window.location.origin.split('/')[0];
};
Lib.prototype.print = function( el ){

	var wind = window.open('','','width=1000,height=800');
	
	wind.document.head.innerHTML = '<link rel="stylesheet" href="'+ window.location.origin +'/style.css" type="text/css">';
	wind.document.body.innerHTML= '<div id="wrapper" class="window-print">' + el.innerHTML + '</div>';
	
	wind.focus();
	
	setTimeout(function(){
		wind.window.print();
	},50);

};

// globals 
window.lib = new Lib();
window.ease = 'ease-out';
window.fold = 1040;
window.tablet = 1000;
window.mobile = 750;
window.mobile_smallest = 450;
window.right = ! lib.ltr() ? 'right' : 'left';
window.left =  lib.ltr() ? 'right' : 'left';

try{

	console.log(symbols);

}catch(err){}


/* jquery extensions and helpers */

$.prototype.scrollTo = function(el_to_scroll_to){
	var it = $(this),
		$el_to_scroll_to = $(el_to_scroll_to).eq(0);
	it.on('click',function(){
		$("html, body").velocity({ scrollTop: $el_to_scroll_to.offset().top - dom.header.offsetHeight }, 1000);
	});
};
$.prototype.revertOrder = function(){
	var $it = $(this);
	var kids = $it.children(),
		kl = kids.length;
	if(!kl) return;
	for(var i = 0; i < kl; i++){
		var kid = $(kids[i]);
		kid.parent().prepend(kid);
	}
};




window.SvgIcons = function(){};

(function($){
	/* jQuery extensions */

	$.fn.extend({
		swipe : function(args){
			var it = $(this);
			var date;
			var dist;
			it.on('touchstart',function(e){
				var touchobj = e.originalEvent ? e.originalEvent.changedTouches[0] : e.changedTouches[0];
				dist = touchobj.clientX;
				date = new Date().getTime();
			});
			it.on('touchend',function(e){
				var touchobj = e.originalEvent ? e.originalEvent.changedTouches[0] : e.changedTouches[0];
				if(touchobj.clientX + ( lib.viewport().width / 3 ) < dist){
					args.swipeLeft(it,e)
				} 
				if(touchobj.clientX - ( lib.viewport().width / 3 ) > dist){
					args.swipeRight(it,e)
				}
			});
		},
	});

	$.fn.extend({
		childrenWidth : function(){
			var w = 0;
			$(this).each(function(){
				
				$(this).children().each(function(){
					w += $(this).width() + parseInt($(this).css('margin-right')) + parseInt($(this).css('margin-left'));
				});
			});

			return w;
		},

		mobileDisplace : function( follow , mobile , mobile_method ){
	
			var $el = $(this);

			$el.each(function(){
				
				var $el = $(this);
				
				var $from = $el.prev().length ? $el.prev() : $el.parent(),
					$follow = $(follow).eq(0),
					desktop_method = $el.prev().length ? 'after' : 'prepend';

				if ( ! $follow.length ) return;

				mobile_method = typeof mobile_method === 'string' ? mobile_method : 'after';
					
				var det = $el.detach();

				var big = true, small = true;

				function make(){
					
					if ( lib.viewport().width <= mobile && small ){

						$follow[ mobile_method ]( det );

						big = true; small = false;

					}
					if ( lib.viewport().width > mobile && big ){

						$from[ desktop_method ]( det );

						big = false ; small = true;

					}

				}

				make();
				
				window.addEventListener('resize',make);

			});
			
		},
		scaleToParentStatic : function(by){

			var $it = $(this),
				$par = $it.parent();

			var formula = ( $par.width() * by ) / $it.width();
			$it.css({
				'transform' : 'scale('+ formula +')',
				'-webkit-transform' : 'scale('+ formula +')'
			});

		},
		scaleToParent : function(by){
			var $it = $(this),
				by = by ? by : 1;
			function make(){
				$it.scaleToParentStatic(by);
			}
			make();
			window.addEventListener('load',make);
			window.addEventListener('resize',make);
		},
		menuBtn : function(by){

			$(this).each(function(){
				var $it = $(this);

				$it.html(
					'<svg width="37" height="34" class="menu-btn-look" preserveAspectRatio="none" viewBox="0 0 37 34">' +
						'<rect class="menu-btn-line" x="0" y="0" width="37" height="6" rx="3" ry="3"></rect>' +
						'<rect class="menu-btn-line" x="0" y="14" width="37" height="6" rx="3" ry="3"></rect>' +
						'<rect class="menu-btn-line" x="0" y="28" width="37" height="6" rx="3" ry="3"></rect>' + 
					'</svg>'

				);
				requestAnimationFrame( function(){
					$it.find('.menu-btn-look').eq(0).scaleToParent(by);
				});
			});
		},
		above : function( event ){

			var $it = $(this);
			var bool = false;
			
			$it.each(function(){

				if ( lib.above( $(this)[0] , event ) ){
					bool = true;
				}
			});

			return bool;
		},

		removeClassStartingWith : function( prefix ){
			
			$(this).removeClass (function ( index, className ) {
				
				var reg = new RegExp( '(^|\\s)' + prefix + '\\S+','g') ;

				if ( className.match ( reg ) ) return className.match ( reg ).join(' ');

			});

			return this;
		},

		toggleView : function(){
			
			var callbacks = [].filter.call(arguments,function(item){
				return typeof item === 'object' && !item.length;
			})[0];

			var speed = [].filter.call(arguments,function(item){
				return typeof item === 'number';
			})[0];

			var selector =  [].filter.call(arguments,function(item){
				return typeof item === 'string' && ( item.indexOf('.') !== -1 );
			})[0];

			$(this).each(function(i){
				
				var $el = $(selector).eq(i);

				$(this).kill = false;

				$(this).on('click', function(e){

					e.stopPropagation();
					e.preventDefault();
					
					var is_display_none 	= function(){return $el.css('display') === 'none'; },
						effect 				= is_display_none() ? 'Down' : 'Up',
						_speed				= speed ? speed : 200,
						$it					= $(this);

					var data = function(){ 
						return {
							btn		: $it,
							content	: $el,
							active	: ! is_display_none(),
							speed	: _speed,
						};
					};

					if ( callbacks && typeof callbacks.before === 'function' ) callbacks.before( data() );

					if ( $it.kill ) return;

					$el['slide' + effect](speed, function(){
						
						$el.attr( 'aria-hidden',is_display_none() ? 'true' : 'false' );

						if ( callbacks && typeof callbacks.after === 'function' ) callbacks.after( data() );

					});

					$(this).toggleClass( 'is-active' );

				});

			});

		}

	});

	// end jquery extensions
	

	SvgIcons.prototype.render = function ( key, asprat ){

		var symbol = symbols[key];
		
		if ( symbols[key] ){

			if ( asprat ){
				asprat = ' preserveAspectRatio="none"';
			}
			
			if ( symbol.content.indexOf('<svg') !== -1 ){
				return symbol.content;
			} else {
				return '<svg width="' + symbol.width + '" height="' + symbol.height + '" viewbox="' + symbol.viewbox + '"' + asprat +'>'+
							symbol.content +
						'</svg>';
			}

		} else {
			console.log( '%c Notice: No matching key for ' + key , 'background:yellow;');
			return '';
		}

	};
	
	SvgIcons.prototype.log = function(){
		return symbols ;
	};

	SvgIcons.prototype.refresh = function( url ){
		$.ajax({
			url:  url ? url : lib.base_url() + '/assets/icons/svg.php',
			dataType: "script",
			cache : true,
			success: function(data){
				location.reload();
			}.bind(this),
			error : function(err){
				console.log('error: ' , err);
			}
		});

	};

	SvgIcons.prototype.loadIcons = function(){

		var icons = document.querySelectorAll('.svgIcon');
				
		if(!icons) return;
		
		[].forEach.call( icons , function( el ){
			
			try {
			var key = (el.className.match(/(\bicon-\S+\b)/ig)[0].replace('icon-',''));
			
			var asprat = el.getAttribute('data-asprat','true');

			el.innerHTML = this.render( key, asprat );

			} catch (er){
				console.log(er);
			}
			
		}.bind(this));

	};


	$('.btn-scrollup').on('click',function(){

		$('body,html').animate({
			scrollTop: 0
		},800);
		
	});
/* end jquery block */
})(jQuery);


window.addEventListener('load',function(){
	new SvgIcons().loadIcons();
});


/**
 * Add a "resizing" class to the body while resizing
 * e.g. to prevent unnecessary css animation during resizing
 */
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (timers['x']) {
			clearTimeout (timers['x']);
		}
		timers['x'] = setTimeout(callback, ms);
		
	};
})();

window.afterRes = {};
window.addEventListener('resize',function(){
	document.body.classList.add('resizing');
	waitForFinalEvent(function(){
		
		document.body.classList.remove('resizing');
		
		Object.keys( afterRes ).forEach( function(key){
			afterRes[key]();
		});

	}, 500 );
});



/**
 * Fix chrome blank screen in android
 */
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
var isPagespeed = navigator.userAgent.toLowerCase().indexOf("speed insights") > -1;
if(isAndroid && !isPagespeed){
	document.body.offsetWidth;
	setTimeout(function(){
		document.body.style.webkitTransform = 'scale(1)';
	}, 0);
	document.body.offsetHeight;
	setTimeout(function(){
		document.body.style.webkitTransform = 'none';
	}, 100);
}

function Main(){}
window.Main = function(){};
window.MP = window.Main.prototype;



document.wrapper = document.getElementById('#wrapper') || document.body;

MP.loadIcons = function(){
	new SvgIcons().loadIcons();
};

window.lib_load_scrollbar_js = function(){

	var script = document.createElement('script');
	var script_id = 'mCustomScrollbar';

	if ( document.getElementById( script_id ) ) return;

	script.id = script_id;
	script.src = lib.base_url() + '/assets/js/vendor/jquery.' + script_id + '.concat.min.js';

	var style = document.createElement('link');
	style.rel = 'stylesheet';
	style.href = lib.base_url() + '/assets/js/vendor/css/jquery.' + script_id + '.css';


	var jquery_script = document.querySelector('script[src*="jquery"]');
	if ( jquery_script ){
		jquery_script.parentNode.insertBefore( script , jquery_script.nextElementSibling )
	}

	document.head.insertBefore( style , document.head.firstElementChild );

} 

function load_script( script_name, callback ){
	var script = document.createElement('script');
	var script_id = 'script_' + script_name;

	if ( document.getElementById( script_id ) ) return;

	script.id = script_id;
	script.src = lib.base_url() + '/assets/js/vendor/' + script_name + '.js';

	var jquery_script = document.querySelector('script[src*="jquery"]');
	if ( jquery_script ){
		jquery_script.parentNode.insertBefore( script , jquery_script.nextElementSibling )
	}

	if ( typeof callback === 'function' ){
		script.addEventListener('load',function(){
			
				callback();
			
		});
	}
}

MP.tabs_table_slider_args = {

	swipe : true,
	fade : false,
	autoplay: false,
	cssEase : ease,
	accessibility : false,
	infinite : false,
	variableWidth: true,
	rtl: true,
	centerMode : false,
	speed: 500,
	dots:false,
	prevArrow : '<button class="slider-btn is-prev">'+ new SvgIcons().render('slider-arr-'+right) +'</button>',
	nextArrow : '<button class="slider-btn is-next">'+ new SvgIcons().render('slider-arr-'+left) +'</button>',
	responsive: [
		{
			breakpoint: mobile + 1,
			settings: {
				slidesToScroll: 1,
				slidesToShow : 1,
			}
		},
		{
			breakpoint: 9999,
			settings: "unslick"
		},
	]
};
