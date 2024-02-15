function Column_chart(args){
	
	this.className_column_holder = 'l-fg1-w0 l-flex column-chart-columns-holder';
	this.className_row_title = 'column-chart-title';
	this.className_cell = 'l-fg1-w0 column-chart-cell';
	this.start = (function(){
		
		for(var key in this){
			if(typeof this[key] === "function" && key.indexOf('_') != 0){
				this[key]();
			}
		}

	}.bind(this))();
}

( function ( $ ) {

	var Cp = Column_chart.prototype;

	Cp._return_el___chart_head = function ( item ){

		var _self = this;

		var chart_head = document.createElement('div'),
			chart_head_title = $(item.querySelectorAll('th')[0]).html();
		
		chart_head.className = 'l-flex f-c column-chart-head';

		$(chart_head).append('<div class="' + this.className_row_title + '">' + chart_head_title + '</div>');

		var chart_head_value_hold = document.createElement('div');
		chart_head_value_hold.className = this.className_column_holder;

		$(item.querySelectorAll('[scope="row"]')).each(function(){
			$(chart_head_value_hold).append('<div class="' + _self.className_cell + ' chart-head-cell"><span class="chart-head-label">' + $(this).html().trim() + '</span></div>');
		});

		chart_head.appendChild( chart_head_value_hold );
		
		return chart_head;

	};

	Cp._return_el___chart_row = function ( col, i, table ){

		var _self = this;

		var row = document.createElement('div'),
			max = parseFloat( col.getAttribute('data-max') ) || 100;

		row.className = 'l-flex f-c column-chart-row column-chart-row-index-'+ i;

		var row_title = document.createElement('div');
		row_title.className = this.className_row_title;
		row_title.innerHTML = col.innerHTML;

		var columns_holder = document.createElement('div');
		columns_holder.className = this.className_column_holder;


		var $table_row = $(table.querySelectorAll('tbody > tr'));

		$table_row.each(function( i_td ){
			
			var $td = $(this).find('>td').eq(i);
			
			if( $td.attr('scope') === 'row' ) return;

			var column = document.createElement('div'),
				td_val = parseFloat( $td.text() ) || 0,
				td_val_to_percent = Math.round( td_val / max * 100 );
			column.className =  _self.className_cell + ' l-rela column-chart-column column-chart-column-index-' + i_td;
			column.innerHTML = 	'<div class="column-chart-column-display" style="height:' + td_val_to_percent +'%">'+
									'<div class="column-chart-column-value">'+td_val+'</div>' +
								'</div>' +
								'<div class="column-chart-column-value">'+td_val+'</div>' ;
			
			columns_holder.appendChild(column);

		});

		row.appendChild( row_title );
		row.appendChild( columns_holder );

		return row;
	}

	Cp._render_html = function( table ){
		
		var chart = document.createElement('div'),
			columns = table.querySelectorAll('thead th');

		chart.className = 'l-column column-chart';
		chart.setAttribute('aria-hidden','true');

		chart.appendChild( this._return_el___chart_head( table ) );

		columns.length && [].forEach.call( columns , function ( th , i ){

			if ( i === 0 ) return;
			
			chart.appendChild( this._return_el___chart_row( th, i, table ) );

		}.bind(this));

		table.parentNode.appendChild(chart);
		
	};
	
	Cp.main_loop = function(){ 
		
		var tables = document.querySelectorAll('.js-column-chart');

		tables.length && [].forEach.call ( tables , function( table ) {
			this._render_html( table );

		}.bind(this) );

	};

	new Column_chart();

})(window.jQuery);