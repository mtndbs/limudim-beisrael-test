
function Column_chart_standard( item ){

	this.item 				= item;
	this.columns_set 		= document.createElement('div');
	this.columns_axis_x 	= document.createElement('div');
	this.columns_vals 		= [];

	this.start = (function(){
		
		for(var key in this){
			if(typeof this[key] === "function" && key.indexOf('_') != 0){
				this[key]();
			}
		}

	}.bind(this))();

}
( function ( $ ) {

	var Cp = Column_chart_standard.prototype;

	Cp.skelaton_html = function(){

		this.columns_set.className = 'l-flex l-fg1 columns-set';

		this.columns_axis_x.className = 'l-flex f-jb column-axis-x';

		this.item.classList.add('l-column');
		this.item.appendChild( this.columns_set );
		this.item.appendChild( this.columns_axis_x );

	};

	Cp.print_columns = function(){
		var formatted;

		this.columns_vals = this.item.getAttribute('data-columns').split(',');
		this.columns_format = this.item.getAttribute('data-format') === 'numbers' ? 'numbers' : 'percentage';

		this.columns_vals.length && this.columns_vals.forEach(function( val, i ){

			var low = val < 20 ? ' is-small-value' : '';
			var outOfFive = val / 100 * 5;

			var trimmedDecimals = parseFloat(Math.round(outOfFive * 100) / 100).toFixed(1)

			formatted = (this.columns_format === 'numbers')
			          ? trimmedDecimals
			          : val+'<small>%</small>';

			var column = document.createElement('div');
			column.className = 'l-column f-b l-fg1-w0 column-chart-standard-column column-chart-style-' + (i + 1) + low;
			column.innerHTML = 	'<div class="l-flex fw-medium f-jc w100 f-b l-tac l-fg1 column-chart-value">' +
									'<span class="column-chart-value-text">' + formatted + '</span>' +
								'</div>' +
								'<div class="w100 l-rela" style="height:'+ val +'%;">'+
									'<div class="h100 l-auto column-chart-graphic"></div>'+
									'<div class="column-chart-inline-value">' + formatted + '</div>' +
								'</div>';

			this.columns_set.appendChild( column );

		}.bind(this));

	};

	Cp.print_x_axis = function(){

		var data_x = this.item.getAttribute('data-x');

		if ( ! data_x ) return;
		
		data_x = data_x.split(',');

		data_x.forEach( function( val ){

			var cell = document.createElement('div');
			
			cell.className = 'column-x-cell';
			cell.innerHTML = '<span class="l-block l-auto l-rela">' + val + '</span>';
			cell.style.width = 100 / this.columns_vals.length + '%';

			this.columns_axis_x.appendChild( cell );

		}.bind(this));


	}

	MP.column_chart_standard = function(){

		var holders = document.querySelectorAll('[data-columns]');

		holders.length && [].forEach.call ( holders, function( item ){

			if (item.dataset.column_chart_ready) {
				return;
			}

			new Column_chart_standard( item );

			item.dataset.column_chart_ready = true;

		});

	};

	MP.slider_4 = function(){

		$('.slider-4').each(function(){
			if ( this.dataset.slider4_ready ) {
				return;
			}
			
			var $slider = $(this);

			$slider.slick({ 
				rtl: ! lib.ltr(),
				speed: 1000,
				dots:false,
				prevArrow : '<button class="slider-btn is-prev">'+ new SvgIcons().render('slider-arr-'+right) +'</button>',
				nextArrow : '<button class="slider-btn is-next">'+ new SvgIcons().render('slider-arr-'+left) +'</button>',
				swipe : true,
				fade : false,
				autoplay: false,
				cssEase : ease,
				slidesToShow : 4,
				slidesToScroll : 4,
				accessibility : false,
				//infinite : infinite,
				responsive: [
					{
						breakpoint: mobile + 1,
						settings: {
							slidesToScroll: 1,
							slidesToShow : 1,
							centerMode: true,
							centerPadding: '3em',
							speed: 500
						}
					},
					
				]	
			});

			$slider.parents('.t-part').addClass('has-slider');

			this.dataset.slider4_ready = true;
		});

	};

})(window.jQuery);
