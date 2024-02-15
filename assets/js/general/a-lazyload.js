/* ================================= LAZY OR GRADUAL IMAGE LOAD ====================== */

function remove_post_images_spinner_onload(el){
	if(!el.parentNode) return;
	if(el.parentNode.className.indexOf(' loaded') === -1){
		el.parentNode.className += " loaded";
	}
}
function on_image_load(it,a){
	it.style.opacity = 1;
	if(typeof callback === "function")callback(it);
}


window.lazy_load_init = function( item , callback ){

	if ( ! item ) return;
	
	
	var ai = item,
		href = ai.href,
		alt = ai.firstElementChild ? ai.firstElementChild.alt : ai.getAttribute('data-alt'),
		class_ = ai.firstElementChild ? ai.firstElementChild.className : "",
		src_mobile = ai.getAttribute('data-srcmobile'),
		mobile = mobile || 750,
		noscript = ai.parentNode.getElementsByTagName('noscript')[0];
	var	what_to_create = ai.dataset.iframe ? 'iframe': 'img';

	if ( src_mobile && lib.viewport().width < mobile ){
		href = src_mobile;
	}

	
	if(noscript){
		var img = document.createElement(what_to_create);
		img.src = href; 
		img.addEventListener('load',function(){
			if( typeof callback === 'function' ) callback();
		});

		var pl = noscript.parentNode;
		if(class_)img.className = class_;
		if(alt) img.alt = alt;
		pl.appendChild(img);
		
		if(ai.dataset.iframe) img.setAttribute('allowfullscreen',"1");

		ai.removeAttribute('href');
		ai.setAttribute('aria-hidden','true');
		if(ai.className.indexOf('loaded') === -1)ai.className += " loaded";
		noscript.parentNode.removeChild(noscript);
	}
	
}




function grad_lazy_load(){

	var n = -1;
	
	var a = document.querySelectorAll('.lazy_load');

	function make(){
		n++;
		lazy_load_init(a[n] , function(){

			if ( n <= a.length ) {
							
				//lazy_load_init(a[n]);
				make();

			}
			

		});
	}
	make();

}
function lazy_load(callback){
	var a = document.querySelectorAll('.lazy_load'),
		al = a.length;
	for(var i = 0; i < al; i++){
		a[i].setAttribute('aria-label','link to image');
		a[i].setAttribute('tabindex','-1');
	}
	function make(){
		for(var i = 0; i < al; i++){
			if( a[i].className.indexOf('loaded') === -1 && lib.isScrolledIntoView( a[i] ) ){
				lazy_load_init( a[i] );
			}
		}
	}
	make();
	window.addEventListener('resize',make);
	window.addEventListener('scroll',make);
	setInterval(make,200);
}

if(document.querySelectorAll('.lazy_load')[0]){
	lazy_load(remove_post_images_spinner_onload);
	window.addEventListener('load',function(){lazy_load(remove_post_images_spinner_onload);});
	window.addEventListener('load',function(){setTimeout(function(){grad_lazy_load(remove_post_images_spinner_onload);},700)});
}
