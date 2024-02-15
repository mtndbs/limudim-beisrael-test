( function ( $ ) { 

	var data = [
		{ label: "Series1",  data: 10, color: 'red'},
		{ label: "Series2",  data: 30, color: 'blue'},
		{ label: "Series3",  data: 90, color: ''},
		{ label: "Series4",  data: 70},
		{ label: "Series5",  data: 80},
		{ label: "Series6",  data: 110}
	];
	function labelFormatter(label, series) {
		return '<div class="l-tac c-white js-pie-label">' +
					'<div class="js-pie-label-title">' + label + '</div>' +
					'<div class="fs-small js-pie-label-value">' + Math.round(series.percent) + '%</div>' +
				'</div>'
	}
	function pie_chart(){

		$('.js-pie').each(function(){
			
			var $it = $(this),
				$source = $it.find('table'),
				data = [];

			$source.length && $source.find('tr').each(function(i){
				var slice = {},
					$row = $(this);
				slice.label = $row.find( '.key' ).html();
				slice.data = parseFloat ( $row.find( '.value' ).text() ) || 0;
				slice.color = $row.find( '.value' ).css('background-color');

				data.push( slice );
			});

			$.plot($(this), data, {
				series: {
					pie: {
						show: true,
						radius: 1,
						label: {
							show: true,
							radius: 2/3,
							formatter: labelFormatter,
							threshold: 0.2
						},
						stroke: {
							width: 4
						}
					}
				},
				legend: {
					show: false
				}
			});		

		});
	}
	load_script(
		'jquery.flot',
		function(){
			load_script('jquery.flot.pie', function(){
				pie_chart();
			});
		}
	);
	
})(window.jQuery);