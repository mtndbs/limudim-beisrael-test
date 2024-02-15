/* ================================================== LIGHTBOX ==================================== 

	a slick-slider based lightbox. slick.min.js script must be loaded before this function is called

*/
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}


function lightbox(){
	var $ = jQuery;
	var boss = document.querySelectorAll('.lightbox');
	var prevent_close = false;
	if(!boss.length) return;

	var methods = {

		print_structure : function( lb, lightbox_block , sibs , i ){

			var slides = [],
				media_types = [];
			
			$('body').addClass('blur');

			// prevent bugs if function called more than once:
			$('#lightbox_overlay').remove();
			
			// create HTML structure
			var structure = document.createElement('div');
			structure.id = "lightbox_overlay";
			structure.innerHTML = 
			'<div class="overlay" style="display:none">'+
				'<div class="lb_spinner"></div><div class="big_close"></div>'+
				'<div class="pad">' +
					'<div class="lb_cover"><div class="lb_lightbox">' + 
						'<div class="lb_close-hold"><div class="lb_close" role="button" aria-label="close popup"></div></div>'+
						'<div class="lb_display">'+

						'</div>'+
					'</div></div>' +
					'<div class="lb_figcaption"></div>'+
				'</div>'+
			'</div>';
			document.body.appendChild(structure);
			document.body.style.overflow = 'hidden';
 

			var make_overlay = document.getElementById("lightbox_overlay");
			
			$(make_overlay).find('.overlay').fadeIn(200);
			

			var index = parseInt( lb.dataset.index );
			
			// html selectors vars
			var close = make_overlay.querySelector('.lb_close'),
				big_close = make_overlay.querySelector('.big_close'),
				lb_display = make_overlay.querySelector('.lb_display'),				
				spinner = make_overlay.querySelector('.lb_spinner'),
				pad = make_overlay.querySelector('.pad'),
				lb_figcaption = make_overlay.querySelector('.lb_figcaption');
			

			// populate lightbox with slides

			lb_display.innerHTML = '';

			[].forEach.call(sibs,function( sib , sib_index ){

				var slide = document.createElement('div');
				slide.className = 'slide lb_slide';
				slide.innerHTML = '<div class="lb_slide-inner"></div>';

				lb_display.appendChild(slide);

				slides.push( slide );

				var media_type = '';

				if(sib.href.indexOf('yout') > -1 || sib.href.indexOf('vimeo') > -1){
					
					media_type = 'iframe';

				} 
				else if ( sib.href.indexOf( 'mp4' ) !== -1 ) {

					media_type = 'video';
					
				} else {

					media_type = 'image';

				}

				media_types.push ( media_type );

				if(sib.href.indexOf('.jpg') === -1 && sib.href.indexOf('.png') === -1 && sib.href.indexOf('.gif') === -1 ) return;

				function preload(){
					var img = new Image();
					img.src = sib.href;
					img.onload = function(){
						if(!slides[sib_index].firstElementChild.innerHTML)
						slides[sib_index].firstElementChild.appendChild( methods.create[ media_type ]( sib ) );
						preload();
					};
				}
				preload();

				
			});

			if(!slides[i].firstElementChild.innerHTML)
			slides[i].firstElementChild.appendChild( methods.create[ media_types[i] ]( lb ) );
			
			
			// initiate slick slider
			var $lb_display = $(lb_display);

			 $lb_display.slick({
				rtl: ! lib.ltr(),
				initialSlide: index,
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow : '<button class="lb_btn lb_btn_prev"></button>',
				nextArrow : '<button class="lb_btn lb_btn_next"></button>',	
			});
			$lb_display.on('beforeChange',function(event, slick, currentSlide, nextSlide){
				prevent_close = true;
				$('.lb_spinner').show();
				
			});
			$lb_display.on('afterChange',function(event, slick, currentSlide, nextSlide){

				$('.lb_spinner').hide();
				
				prevent_close = false;
				
				slick.$slider.find('video').each(function(){$(this)[0].pause()});

				slick.$slider.find('iframe').each(function(){$(this).attr('src','')});

				var current_iframe = slick.$slider.find('[data-slick-index="'+currentSlide+'"]').eq(0).find('iframe');

				current_iframe.attr('src',current_iframe.data('src'));

				if(!slides[currentSlide].firstElementChild.innerHTML)

				slides[currentSlide].firstElementChild.appendChild( methods.create[ media_types[currentSlide] ]( sibs[currentSlide] ) );

			});


			// closing and destroying lightbox
			
			close.addEventListener('click',function(){prevent_close = false;methods.close();});
			big_close.addEventListener('click',function(){prevent_close = false;methods.close();});
			

			pad.addEventListener('click',function(e){
				var meida = this.querySelector('.slick-current').querySelector('img,iframe,video');
				if(!meida) return;

				return;
				if(!methods.above(meida,e)){
					methods.close();
				}
			});
			
			document.addEventListener('keydown',function(e){
				if(e.keyCode == '27'){
					methods.close();
				}
			});								
			
		},

		create : {

			image : function( elem ){

				var image = document.createElement('img');
				
				image.className = 'lb-media lb-media--image';

				image.src = elem.href;

				try {
					image.alt = elem.querySelector('img').alt;
				} catch(err){}

				return image;

			},

			iframe : function ( elem ){

				var video_frame = document.createElement('div');
				video_frame.className = 'lb-media-frame';

				var iframe = document.createElement('iframe');

				iframe.className = 'lb-media lb-media--iframe';

				iframe.src = 'https://www.youtube.com/embed/' + youtube_parser(elem.href);
				iframe.setAttribute('data-src',iframe.src);

				video_frame.appendChild(iframe);

				return video_frame;

			},

			video : function( elem ){

				var video_frame = document.createElement('div');
				video_frame.className = 'lb-media-frame';

				var video = document.createElement('video');

				video.className = 'lb-media lb-media--video';

				video.setAttribute('controls','true');

				video.innerHTML = '<source src="' + elem.href + '" type="video/mp4">';

				video_frame.appendChild(video);

				return video_frame;

			}
		},
		
		destroy : function(elem){
			// destroy (used to prevent multiple iframes from playing at the same time)
			if(elem.firstElementChild){
				elem.removeChild(elem.firstElementChild);
			}
		},
		preload_linked_images : function(el){
			var href = el.href;
			if(href.indexOf('.jpg') === -1 && href.indexOf('.png') === -1 && href.indexOf('.gif') === -1 ) return;
			var image = new Image();
			image.src = href;
			image.className = "obscure";
		},
		close : function(){
			if(prevent_close) return;
			$('#lightbox_overlay').find('.overlay').fadeOut(200,function(){
				$('#lightbox_overlay').find('.lb_display').slick('unslick');
				$('#lightbox_overlay').remove();
			});
			$('body').removeClass('blur');
			document.body.style.overflow = '';
		},
		above : function(el,event){
			var cx = event.changedTouches ? event.changedTouches[0].pageX : event.clientX,
				cy = event.changedTouches ? event.changedTouches[0].pageY : event.clientY;
			return !((el.getBoundingClientRect().right < cx) || (el.getBoundingClientRect().left > cx) || 
				(el.getBoundingClientRect().top > cy) || (el.getBoundingClientRect().bottom < cy));
			
		}

	};

	[].forEach.call(boss,function(lightbox_block){
		var lbs = lightbox_block.querySelectorAll('.lb');
		if(!lbs.length) return;
		
		/* fix slick slider cloning issue (if .lb is in slick slider) */
		lbs = [].filter.call(lbs,function(lb,i){
			return lb.parentNode.parentNode.className.indexOf('clone') === -1;
		});

		[].forEach.call(lbs,function(lb,i){
			
			lb.setAttribute('data-index',i);
			
			var thumb = lb.querySelector('img');
			
			if(thumb){
				lb.setAttribute('data-alt' ,thumb.alt);
			}
			
			lb.addEventListener('click',function(e){
				e.preventDefault();
				methods.print_structure( lb , lightbox_block , lbs , i);
			});

			methods.preload_linked_images(lb);
		});

	});
}

lightbox();