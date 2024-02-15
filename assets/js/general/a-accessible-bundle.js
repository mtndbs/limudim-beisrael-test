 


/* ======================================= ACCESIBILITY CLASS ========================================================== */


window.Accessible_Bundle = function(args){
    this.options = args;
    this.interactives = ['a','button','input','textarea'];
    this.anchor_to_image = document.querySelectorAll('a[href$=".jpg"],a[href$=".png"]');
    this.stylesheet = document.createElement('style');
    this.main_menu = args.main_menu;
    this.sub_menu = args.sub_menu;
    this.focus_style = "1px solid #4da0fe !important";
	this.breadcrumbs = args.breadcrumbs;
	this.tags = args.tags;
	this.start = (function(){
		for(var key in this){
			if(typeof this[key] === "function"){
				this[key]();
			}
		}
	}.bind(this))();
}

Accessible_Bundle.prototype.methods = {
	triggerMouseEvent : function(node, eventType) {
		var clickEvent = document.createEvent('MouseEvents');
		clickEvent.initEvent(eventType, true, true);
		node.dispatchEvent(clickEvent);
	},
    getStyle : function(node, style_prop){
        return window.getComputedStyle(node,null).getPropertyValue(style_prop);
    },
    parentsUntil : function(el, parent_name){
        var parent = el.parentNode;
        var con = parent.className.indexOf(parent_name) === -1 || parent_name.toUpperCase() != parent.parentNode.nodeName.toUpperCase();
        while(con){
            if(parent.nodeName === "FORM" || parent.nodeName === "BODY" || con){
                break;
            }
            parent = parent.parentNode;
        }
        return parent;
    }, 
    viewport : function(){
		var e = window, a = 'inner';
		if (!('innerWidth' in window )) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    },
    above : function(el,event){
        var cx = event.clientX,
            cy = event.clientY;
        return !((el.getBoundingClientRect().right < cx) || (el.getBoundingClientRect().left > cx) || 
            (el.getBoundingClientRect().top > cy) || (el.getBoundingClientRect().bottom < cy));
    },
	kidnap : function ( kidnapper , parent , wrapper){
		while ( parent.firstChild ){
			if ( ! wrapper ){
				kidnapper.appendChild ( parent.firstChild );
			} else {
				var w = document.createElement(wrapper);
				w.appendChild( parent.firstChild );
				kidnapper.appendChild ( w );
			}
		}
	},
	run_all : function(obj){
		
		Object.keys( Object.getPrototypeOf( obj )).forEach(function(key){
			if(typeof obj[key] !== 'function') return;
			try{
				if(key.indexOf('_') === 0) return;
			} catch(err){
				console.log(err);
			}
			obj[key]();
		});

	},
	is_mobile :  function() {
		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	},
	compute_style : function(el,style,toint){
		if(toint) {
			return parseInt(window.getComputedStyle(el,null).getPropertyValue(style));
		} else {
			return window.getComputedStyle(el,null).getPropertyValue(style);
		}
	},
	cancel_display : function ( el ){
		el.removeAttribute('style');
		el.setAttribute('aria-hidden','true');
	}
	
	
};
Accessible_Bundle.prototype.methods.upper = Accessible_Bundle;
Accessible_Bundle.prototype.make_stylesheet = function(){

    /*appends a stylesheet to the <head> and places some accesibility styles inside */

    this.interactives.forEach(function(item){
		var add_tab_highlight = document.createTextNode(".tab_navigation "+ item +":focus {outline:"+ this.focus_style +";}")                         
		this.stylesheet.appendChild(add_tab_highlight);
    }.bind(this));

    var obscure_style = document.createTextNode(
        '.obscure {position:absolute;height:0;width:0;overflow:hidden;}'+
		'.offScreen {margin:0px;height:0px;overflow:hidden;position:absolute;display:table-cell;width:0;padding:0;}'+
		'.foce_shown {display:block !important;}'+
		'.a11y_bundle-norm-ul {margin:0;padding:0;list-style:none;}' +
		'.a11y_bundle-crumbs li {display:inline-block;}' 
	
    );
    this.stylesheet.appendChild(obscure_style);
    this.stylesheet.id = "Accessible_Bundle_Stylesheet";
    document.head.appendChild(this.stylesheet);

};
Accessible_Bundle.prototype.tab_navigation = function(){

    /* sets up styled highlights on focused elements when navigating with tab key */

    var it = this;
	document.addEventListener('keyup',function(e){
		if(e.which === 9){
			if(document.body.className.indexOf(' tab_navigation') === -1){
				document.body.className += " tab_navigation";
			}
		}
	});
	document.addEventListener('click',function(e){
		document.body.className = document.body.className.replace(" tab_navigation","");
	});
};
Accessible_Bundle.prototype.display_sub_menu = function(){
     
    var it = this;
    /*makes sure that sub menus are displayed on the focus of the sub's parent's <a> element */
    function on_menu_link_focus( el ){

		var links = el.querySelectorAll('a'),
			uls = [],
			is_big_screen = function(){return it.methods.is_mobile() || it.methods.viewport().width < 1000 ;},
			more_sub_selectors = it.sub_menu ? ' , ' + it.sub_menu : '';;
				
		[].forEach.call(links,function(a,i){
			
			var ul = a.parentNode.querySelector('ul' + more_sub_selectors );

			if(ul) uls.push(ul); 

			a.addEventListener('focus',function(){
				this.classList.add('is-focus');
				if (is_big_screen() || !ul ) return;
				ul.style.display = 'block';
				ul.style.visibility = 'visible';
				ul.style.opacity = 1;
				ul.setAttribute('aria-hidden','false');
			});
			a.addEventListener('blur',function(){
				this.classList.remove('is-focus');
				if (is_big_screen() ) return;
				if ( i === links.length - 1 ){
					uls.hideEls();
				}
				if ( i === 0 ){
					uls.hideEls();
				}
				
			});

			if ( ! ul ) return;
			
			document.addEventListener('mouseup',function(){
				if (is_big_screen() ) return;
				ul.removeAttribute('style');
				ul.setAttribute('aria-hidden','true');
			});
			a.addEventListener('mouseenter',function(){
				if (is_big_screen() ) return;
				uls.hideEls( ul );
				ul.setAttribute('aria-hidden','false');
			});
			a.addEventListener('mouseleave',function(){
				if (is_big_screen() ) return;
				ul.setAttribute('aria-hidden','true');
			});

		});

    }

    
	Array.prototype.hideEls = function( not ){

		this.filter(function(el){
            if ( not ){
			    return el !== not;
            } else {
                return true;
            }
		}).forEach( function( ul ){
			it.methods.cancel_display(ul);
		});
        
	};

	var menus = document.querySelectorAll(this.main_menu);
    if(!menus.length) return;
   
	[].forEach.call ( menus , function( menu ){
    	
		on_menu_link_focus(menu);

		var sub_menus = menu.querySelectorAll('ul');
		[].forEach.call ( sub_menus , function( sub_menu ){
			on_menu_link_focus(sub_menu);
		});
		

	});



	

};
Accessible_Bundle.prototype.click_on_button_on_focus = function(){
    var btns = document.querySelectorAll('button , a[href="javascript:void(0)"]');
	/*componsates if focus element has mousedown event instead of click */
    if(!btns) return;
	var it = this;
    [].forEach.call(btns,function(el){
       
        if(this.methods.getStyle(el,"display") === "none" || this.methods.getStyle(el,"visibility") === "hidden") return;
       
        el.addEventListener('focus',function(){
            el.addEventListener('keyup',function(e){
                if(e.which == 13){
					it.methods.triggerMouseEvent(this,'mousedown');
					requestAnimationFrame(function(){
						it.methods.triggerMouseEvent(this,'mouseup');
					}.bind(this));
                }
            });
        });

    }.bind(this));
   
};
Accessible_Bundle.prototype.highlight_focus_on_styled_checkbox = function(){

    /*finds checkboxes with 0 opacity and transforms their focus style to their parent*/
    
    var obscure_checkboxes = document.querySelectorAll('input[type="checkbox"]');
     if(!obscure_checkboxes.length) return;
	
    var it = this;
    obscure_checkboxes = [].filter.call(obscure_checkboxes,function(el){
        return it.methods.getStyle(el,"opacity") === "0";
    });
    if(!obscure_checkboxes.length) return;

    [].forEach.call(obscure_checkboxes,function(el){
		
        el.addEventListener('focus',function(){
			if(el.parentNode.className.indexOf(" onfocus") === -1)el.parentNode.className += " onfocus";
        });
        el.addEventListener('blur',function(){
            el.parentNode.className = el.parentNode.className.replace(' onfocus','');
        });
		el.addEventListener('click',function(){
			if(this.checked === false){
				 el.parentNode.className = el.parentNode.className.replace(' onfocus','');
			}
		});
    });
};

Accessible_Bundle.prototype.print_aria_labels_on_menus = function(){

    /*  menu structure as according to example in 
        http://www.toovya.co.il/web-accessibility/58-definition-of-menus-with-aria-roles
    */
    var menus = document.querySelectorAll(this.main_menu);
    if(!menus.length) return;
    var methods = {
        set_li_attributes : function(lis){
            [].forEach.call(lis,function(li){
                li.setAttribute('role','menuitem');
                var sub_menu = li.getElementsByTagName('ul')[0];
                if(sub_menu) {
                    li.setAttribute('aria-haspopup','true');
                    sub_menu.setAttribute('role','menu');
                }
            });
        }
    };
    [].forEach.call(menus,function(el){
        el.insertAdjacentHTML('beforebegin','<h5 class="offScreen">Menu Bar</h5>');
        el.parentNode.setAttribute('role','navigation');
        el.setAttribute('role','menubar');
        methods.set_li_attributes(el.getElementsByTagName('li'));
    }.bind(this));
};

Accessible_Bundle.prototype.a11y_form = function(){

    /* inserting accesibility helpers to selected forms' elements */

    var forms = document.querySelectorAll(this.options.forms);
    if(!forms.length) return;
    var it = this;
    var methods = {
        print_labels : function(form){
            var inputs = form.querySelectorAll('input:not([type="submit"]):not([type="hidden"]),textarea');
            var  n = new Date().getTime() ;
            [].forEach.call(inputs,function(el){
				if( el.getAttribute('aria-label') ) return;
                /*vars*/
                var id = el.id,
                    label_for_this_el = form.querySelector('label[for="'+id+'"]');
                   
                
                /*print area-required on required fields */
                if(el.hasAttribute('required') && !el.hasAttribute('aria-required')){
                    el.setAttribute('aria-required','true');
                }
                
                /* print label for that input if no valid label*/
                if(it.methods.parentsUntil(el,'label').nodeName != "LABEL"){
                    /* not wrapped in label */
                    
                    
					el.setAttribute('aria-label',el.placeholder ? el.placeholder : el.value);
                    
                    
                } else {
                    /*wrapped in label, but label is empty or has no aria-labelledby attribute*/
                    var wrapping_label =  it.methods.parentsUntil(el,'label');
                    if(wrapping_label.id === ""){
                         n++;
                        wrapping_label.id = "wrapping_label_id_" + n;
                    }
                     
                    if(wrapping_label.textContent.trim() === ""){
                        var label_text = document.createElement('span');
                        label_text.textContent = el.placeholder ? el.placeholder : el.value;
                        label_text.className = "obscure";                        
                        wrapping_label.appendChild( label_text );
                    }
                    if(!el.hasAttribute('aria-labelledby')) el.setAttribute('aria-labelledby',wrapping_label.id);
                }
                
            });
        }
    };
    
    [].forEach.call(forms,function(el){ 
    //    el.setAttribute('novalidate','');
        methods.print_labels(el);
    });
};
Accessible_Bundle.prototype.google_recaptcha = function(){
    var recaptcha_keys = document.querySelectorAll('.recaptcha_key');
    if(!recaptcha_keys.length) return;
    /*load the google api recpatcha script*/
    var script = document.createElement('script');
    script.src = "https://www.google.com/recaptcha/api.js?hl=iw";
    document.body.appendChild(script);
    /* */
    var it = this;
    var methods = {
        recaptcha_responsive : function(){
            var recaptchas = document.querySelectorAll('.g-recaptcha');
            if(!recaptchas.length) return;
            var methods = {
                scale : function(el,by){
                    el.style.transform = "scale("+by+")";
                    el.style.webkitTransform = "scale("+by+")";
                    el.style.msTransform = "scale("+by+")";
                },	
                start : function(el){
                    var par = el.parentNode,
                        goal_width_in_px = par.clientWidth,
                        el_width = el.children[0] ? el.children[0].clientWidth : 0,
                        formula = goal_width_in_px / el_width;
                    if(formula > 1) formula = 1;
                    this.scale(el,formula);
                    par.style.height = el.clientHeight * formula + "px"; 
                },
                make : function(){
                    [].forEach.call(recaptchas,function(el){
                        this.start(el);
                    }.bind(methods));
                }
            };
            function recourse(){
                methods.make();
                setTimeout(recourse,30);
            }recourse();
        },
        recaptcha_css : function(){
            var css = document.createTextNode(
                '.gr_hold {	margin-top: 10px;}'+
                '.g-recaptcha {transform-origin: right top;-webkit-transform-origin: right top;margin:8px 0 0 0;}'+
                '.gr_hold {	max-width:304px;margin:0 auto 9px;}'
            );
            it.stylesheet.appendChild(css);
        }
    };
    script.onload = function(){
        [].forEach.call(recaptcha_keys,function(el){
            el.innerHTML = '<div class="gr_hold loading">' +
                '<div class="g-recaptcha" data-sitekey="' + el.dataset.key + '" data-theme="light"></div>' + 
            '</div>';
        });
        methods.recaptcha_css();
        methods.recaptcha_responsive();
    }
};
Accessible_Bundle.prototype.pagination = function(){
    var pagination = document.querySelectorAll(this.options.pagination);
    if(!pagination.length) return;
    [].forEach.call(pagination,function(el){
        el.setAttribute('role',"navigation");
        el.insertAdjacentHTML('beforebegin','<h5 class="offScreen">Pagination</h5>');
        var links = el.querySelectorAll('a'),
            lil = links.length;
        for(var i = 0; i < lil; i++){
            if(i === 0) {
                links[0].setAttribute('aria-label',"previous page");
            }
            links[links.length - 1].setAttribute('aria-label',"last page");
        }

    });
};

Accessible_Bundle.prototype.sidebr_to_top_on_mombile = function(){
    var options = this.options.push_sidebar_to_top;
    if(typeof options !== "object") return;
    var big_bool = true,
        small_bool = true,
        sidebar = document.querySelector(options.sidebar),
        placer = document.querySelector(options.where_to_put);
        
    if(!sidebar || !placer){
        return; 
    }
    var clone = sidebar.cloneNode(true),
        clone_id = "cloned_sidebar_for_mobile_82374023",
        it = this;
    
    function make(){
        if(it.methods.viewport().width < options.when_to_change){
            if(small_bool){
                placer.insertBefore(clone,placer.children[0]);
                clone.id = clone_id;
                sidebar.style.display = "none";
                small_bool = false;
                big_bool = true;
            }
        } else {
            if(big_bool){
                var exisiting = document.getElementById(clone_id);
                if(exisiting){
                    exisiting.parentNode.removeChild(exisiting);
                }
                sidebar.style.display = "";
                small_bool = true;
                big_bool = false;
            }
        }
    }
    make();
    window.addEventListener('resize',make);
};
Accessible_Bundle.prototype.skip_on_tabs_navigation = function(){
	/* removes access to elemnt on tab navigation */
	var to_skip = document.querySelectorAll(this.options.elems_to_skip_on_tab_navigation);
	if(!to_skip.length) return;
	[].forEach.call(to_skip,function(el){
		el.setAttribute('tabindes','-1');
	});
};
Accessible_Bundle.prototype.a11ybreadcrumbs = function(){

	if (  !this.breadcrumbs ) return;

	var crumbsHold = document.querySelectorAll( this.breadcrumbs.selector );

	
	if ( ! crumbsHold.length ) return;

	[].forEach.call ( crumbsHold , function ( el ) {
		var nav = document.createElement('nav');
		nav.setAttribute('aria-label', (this.breadcrumbs.title || 'breadcrumbs' ));

		nav.className = 'a11y_bundle-crumbs ' + el.className;

		var ol = document.createElement('ol');
		ol.className = 'a11y_bundle-norm-ul';

		nav.appendChild(ol);

		this.methods.kidnap(ol,el,'li');

		el.parentNode.replaceChild( nav , el);

	}.bind(this));
};

Accessible_Bundle.prototype.aria_labels_from_title = function(){

	var els = document.querySelectorAll('[title]');
	if ( !els.length ) return;

	[].forEach.call ( els , function(el){
		if ( el.title == el.textContent.trim()){
			el.removeAttribute('title');
		} else {
			el.setAttribute('aria-label',el.title);
		}
	});
};

Accessible_Bundle.prototype.change_tags = function(){

	if ( ! typeof this.tags === 'object') return;

	Object.keys( this.tags ).forEach(function( key ){

		var els = document.querySelectorAll( key );

		if ( ! els.length ) return;

		[].forEach.call ( els , function ( el ) {

			try {
				var className = this.tags[key].className,
					label = this.tags[key].label,
					newEl = el,
					tag = this.tags[key].tag;

				if (tag ) {

					newEl = document.createElement( tag );
					this.methods.kidnap( newEl , el );
					newEl.className = el.className;
					el.parentNode.replaceChild( newEl , el );
					[].forEach.call( el.attributes ,function(attr){
						newEl.setAttribute( attr.name , attr.value );
					});
					
				} 

				var list_of_attributes = this.tags[key];

				Object.keys( list_of_attributes ).
				filter(function( _key ){ return _key !== 'tag' }).
				forEach(function( _key ){
					
					newEl.setAttribute( _key , list_of_attributes[ _key ] );

				}.bind(this));
				

			//	if ( tag ) newEl.classList.add('a11y_el-' + tag );
	
				
			} catch(err){console.log(err)}
		}.bind(this));

	}.bind(this));
};

Accessible_Bundle.prototype.tree = function(){
    var trees = document.querySelectorAll('[role="tree"]');
    if ( ! trees.length ) return;
    [].forEach.call ( trees , function ( tree ){

        var itmes = tree.children;

        itmes.length && [].forEach.call ( itmes , function ( item ){

            if ( ! item.textContent.trim() ) return;
            
            item.setAttribute('role','treeitem');

        });
    });
};
