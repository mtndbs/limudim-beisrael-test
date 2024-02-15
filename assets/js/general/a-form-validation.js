!function($, window, document, _undefined)
{
	$(document).ready(function(){
		
	/**
	* Form Submit
	*/
	// phone validation
	$('input[type=tel]').keydown(function(e){
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
			// Allow: Ctrl+A
			(e.keyCode == 65 && e.ctrlKey === true) ||
			// Allow: Ctrl+C
			(e.keyCode == 67 && e.ctrlKey === true) ||
			// Allow: Ctrl+X
			(e.keyCode == 88 && e.ctrlKey === true) ||
			// Allow: home, end, left, right
			(e.keyCode >= 35 && e.keyCode <= 39)) {
				// don't do anything
				return;
		}
		// Ensure that it is a number and stop the keypress
		if (
			(e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
			(e.keyCode < 96 || e.keyCode > 105) &&
			$.inArray(e.keyCode, [107, 187, 109, 189]) === -1 // plus, 
		) {
			e.preventDefault();
		}
	});

	$('form[method="post"]').on('submit', function(e){
		
		var $form = $(this);
		
		$form.find('.gump-error-message').remove();
		$form.find('.form-error-container').remove();

		var errorsArray = [];
		var checkEmail = true;
		var checkPhone = true;
		$form.find('[required]').each(function(){
			if(!$.trim($(this).val()))
			{
				errorsArray.push( IMARK_validation_errors[$(this).attr('name')] +' '+ IMARK_validation_errors['required'] );
				if($(this).attr('type') == 'email')
				{
					checkEmail = false;
				}
				else if($(this).attr('type') == 'tel')
				{
					checkPhone = false;
				}
			}
		});

		if(checkEmail)
		{
			$form.find('[type="email"]').each(function(){
				if (!/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test( $(this).val() ))
				{
					errorsArray.push( IMARK_validation_errors['email_error'] );
				}
			});
		}

		if(checkPhone)
		{
			$form.find('[name="mobile"]').each(function(){
                var phoneLength = $(this).val().length;
				if( phoneLength && phoneLength < 8 )
				{
					errorsArray.push( IMARK_validation_errors['phone_error'] );
				}
			});
		}

		if(errorsArray.length)
		{
			var errors = errorsArray.join('<span class="comma">, </span>');
			var error = $('<div role="alert" class="form-error-container" style="display:none">'+ errors +'</div>');

			error.appendTo($form).slideDown();
			
			e.preventDefault();
			
			return false;
		}

		$.ajax({
			url	 : $form.attr('action'),
			data : $form.serializeObject(),
			type : 'POST',
			beforeSend: function( xhr )
			{	
				$form.find('.submit_look').addClass('loading');
				$form.find('input[type="submit"]').prop('disabled', true);
				
			},
			success: function( response )
			{
				$form.find('.submit_look').removeClass('loading');
				$form.find('input[type="submit"]').prop('disabled', false);
				
				if ( false === response.success )
				{
					var errors = Object.keys(response.data).map(function(currentValue, index) {
						return response.data[currentValue];
					}).join('<span class="comma">, </span>');
					var error = $('<div role="alert" class="form-error-container" style="display:none">'+ errors +'</div>');

					error.appendTo($form).slideDown();
				}
				else if ( true === response.success )
				{
					window.location = response.data;
				}
			},
			error : function( request, status, error ){
				
				console.log(request.responseText);
			}
		});
		
		e.preventDefault();
	});
	
	/**
	* Serialize Object Function
	*/
	$.fn.serializeObject = function()
	{
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
});
}(jQuery, this, document);

function prevent_resize(){
	var input = document.querySelectorAll('.inf_i'),
		li = input.length;
	for(var i = 0; i < li; i++){
		focus(input[i]);
	}
	function focus(el){
		var meta = document.getElementById('viewport'),
			meta_original = meta.content;
		el.addEventListener('focus',function(){
			meta.content += ", maximum-scale=1.0, user-scalable=0";
		});
		el.addEventListener('blur',function(){
			meta.content = meta_original;
		});
	}
};prevent_resize();

function recaptcha_responsive(){
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
}
recaptcha_responsive();



(function c2c(){
	var a = document.querySelectorAll('a[href^="tel"]');
	if(!a.length) return;
	if(browser.mobile()) return;
	[].forEach.call(a,function(el){
		el.className += ' c2c';
		el.addEventListener('click',function(e){
			e.preventDefault();
		});
	});
})();

