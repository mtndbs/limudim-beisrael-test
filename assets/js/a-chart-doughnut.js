window.Ddoughnut_chart = function(args){};

( function ( $ ) {

	var Pp = Ddoughnut_chart.prototype;

	
	Pp._pie_html = function( value, item ){

		var r = 'r="15.91549430918954"',
			base = 42,
			base_half = base / 2,
			stroke_width = base / 12,
			d = 'stroke-dasharray="' + value + ' ' + ( 100 - value ) + '" stroke-dashoffset="25"';

		return '<svg class="l-stretch" style="width: '+ item.clientWidth * 1.2 +'px;height: '+ item.clientWidth * 1.2 +'px" " viewBox="0 0 ' + base + ' ' + base +'" class="pie-chart" preserveAspectAspectRatio="none">' +

			'<circle class="pie-ring" cx="' + base_half + '" cy="' + base_half + '" ' + r + ' fill="transparent" stroke="whiteSmoke" stroke-width="'+ stroke_width +'"></circle>' +

			'<circle class="pie-slice" cx="' + base_half + '" cy="' + base_half + '" ' + r + ' fill="transparent" stroke="salmon" stroke-width="'+ stroke_width+'" '+ d +'></circle>' +

		'</svg>';

	};

	Pp.main_loop = function(){ 

		var items = document.querySelectorAll('.js-doughnutChart');

		items.length && [].forEach.call ( items , function( item ) {
			if (item.dataset.doughnut_chart_ready) {
				return;
			}

			var value = parseInt(item.getAttribute('data-percent'));

			item.classList.add( 'l-rela' );

			lib.on(['load','resize'], function(){
				item.style.height = item.clientWidth + 'px';
				item.innerHTML = this._pie_html( value , item );

			}.bind(this),100);

			item.dataset.doughnut_chart_ready = true;
		}.bind(this) );

	};

	lib.run_all ( new Ddoughnut_chart() );

})(window.jQuery);
