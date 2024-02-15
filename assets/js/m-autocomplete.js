( function ( $ ) {

	MP.autocomplete = function(){
		$('[data-autocomplete]').each(function() {
			var $input = $(this);
			var options = $input.data('autocomplete');

			// options.width = 'flex';
			options.noCache = true;
			options.containerClass = 'custom-autocomplete-suggestions';

			options.transformResult = function(text) {
				var response;

				try {
					response = eval('(' + text + ')');
				} catch (err) {
					response = typeof response === 'string' ? $.parseJSON(response) : response;
				}

				return response;
			};

			options.formatResult = function (suggestion, currentValue) {
				// Do not replace anything if the current value is empty
				if (!currentValue) {
					return '<span>' + suggestion.value + '</span>';
				}

				function escapeRegExChars(value) {
					return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
				}

				var pattern = '(' + escapeRegExChars(currentValue) + ')';

				return '<span>'+ suggestion.value
					.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>')
					.replace(/&/g, '&amp;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')
					.replace(/"/g, '&quot;')
					.replace(/&lt;(\/?strong)&gt;/g, '<$1>') + '</span>';
			};

			$input.autocomplete(options);
		});
	};

}) ( window.jQuery);
