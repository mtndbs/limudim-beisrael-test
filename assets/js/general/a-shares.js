
window.Share = function(){};

window.Vp = Share.prototype;

	Vp.email_this_location = function(){
		var btn = document.querySelectorAll('.email_this_location');
		if(btn){
			var bl = btn.length;
			for(var i = 0; i < bl; i++){
				click(i);
			}
		};
		function click(x){
			btn[x].addEventListener('click',function(e){
				e.preventDefault();
				var formattedBody = window.location.href;
				var mailToLink = "mailto:?subject="+ this.dataset.subject + "&body=" + encodeURIComponent(formattedBody);
				window.location.href = mailToLink;
				
			})
		}
	};
	
	Vp.share_btns = function(){

		var btns = document.querySelectorAll('.btn-share');
		
		if(btns[0]){
			var bl = btns.length;
			for(var i = 0; i < bl; i++){
				shareit(i);
			}
		};
		function shareit(x){
			btns[x].addEventListener('click',function(e){
				e.preventDefault();
				
				var h = function(test) { return this.className.indexOf(test) !== -1 }.bind(this);
				var loc = window.location.href;
				
				if( h('facebook') ) {

					var href = 'http://www.facebook.com/share.php?u=' + loc;
					window.open(href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');

				} 

				else if( h('google plus' ) ){

					if(typeof(canonicalUrl)=='undefined'){canonicalUrl=loc;}window.open('http://plus.google.com/share?url='+encodeURI(canonicalUrl),'wallapop','width=660,height=440,scrollbars=no,status=no,toolbar=no,menubar=no,location=no');this.href='//plus.google.com/share?url=&rand='+Math.round(Math.random()*10000);this.href='javascript:void(0);';

				}
				
				else if( h ('twitter' ) ){

					if(typeof(canonicalUrl)=='undefined'){canonicalUrl=loc;}window.open('http://twitter.com/share?u='+encodeURI(canonicalUrl),'wallapop','width=660,height=440,scrollbars=no,status=no,toolbar=no,menubar=no,location=no');this.href='//twitter.com/share?u=&rand='+Math.round(Math.random()*10000);this.href='javascript:void(0);';

				} 
				
				else if ( h ( 'email' ) ){
					
					window.location = 'mailto:?subject= &body=' + loc; 

				} 
				
				else if(h ( 'sms' ) ){
					
					if(navigator.userAgent.indexOf(('Android')) === -1){
						/*not Android*/
						window.location.href="sms: &body="+bodytext;
					} else {
						/*Android*/
						window.location.href="sms: ?body="+bodytext;
					}
					

				} 
				
				else if(h ( 'whatsapp' ) ){

					window.location = 'whatsapp://send?text=' + loc;

				}	
				
			})
		};

	};




lib.run_all( new Share() );


