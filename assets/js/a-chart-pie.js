function Pie_chart(args){
	
	this.start = (function(){
		
		this.items = document.querySelectorAll('.js-pie');

		for(var key in this){
			if(typeof this[key] === "function" && key.indexOf('_') != 0){
				this[key]();
			}
		}

	}.bind(this))();
}
function getCoordinatesForPercent(percent) {

  	var x = Math.cos(2 * Math.PI * percent);
  	var y = Math.sin(2 * Math.PI * percent);
	
	return {x:x, y:y};

}
( function ( $ ) { 

	var Pp = Pie_chart.prototype;

	function similar(a,b){
		var range = 10;
		return a + range > b;
	}
	
	Pp._pie_html = function( value, item ){

		if ( ! value ) return;

		var svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
			svgHolder = document.createElement('div'),
			svgRotator = document.createElement('div'),
			holder = item.querySelector('.svg-holder');

		svgHolder.className = 'l-rela h100 w100 svg-text-holder';
		svgRotator.className = 'h100 w100 svgRotator';

		svgEl.setAttribute('viewBox','-1 -1 2 2');

		var slices = [],
			rows = item.querySelectorAll('tr');

		rows.length && [].forEach.call( rows, function(row){

			var slice = {},
				value = parseInt( row.querySelector('.value').textContent ) || 0;
			slice.percent = value / 100;
			slice.text = row.querySelector('.key').innerHTML.trim() || '';
			slice.value = value;
			slice.color = row.querySelector('.value').style.backgroundColor;

			slices.push(slice);

		});

	
		var cumulativePercent = 0;

		svgRotator.appendChild(svgEl);
		svgHolder.appendChild(svgRotator);
		
		holder.replaceChild( svgHolder, holder.firstChild );

		slices.forEach( function( slice, i ) {
			// destructuring assignment sets the two variables at once

			var startX =  getCoordinatesForPercent(cumulativePercent).x, 
				startY = getCoordinatesForPercent(cumulativePercent).y;
			
			// each slice starts where the last slice ended, so keep a cumulative percent
			cumulativePercent += slice.percent;
			
			var endX = getCoordinatesForPercent(cumulativePercent).x ,
				endY = getCoordinatesForPercent(cumulativePercent).y;

			// if the slice is more than 50%, take the large arc (the long way around)
			var largeArcFlag = slice.percent > .5 ? 1 : 0;

			// create an array and join it just for code readability
			var pathData = [
				'M ' + startX + ' ' + startY, // Move
				'A 1 1 0 ' + largeArcFlag +  1 + ' ' + endX + ' ' + endY , // Arc
				'L 0 0 Z', // Line
			].join(' ');

			// create a <path> and append it to the <svg> element
			var pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			pathEl.setAttribute('d', pathData);
			pathEl.setAttribute('class', 'slice-' + i);
			pathEl.setAttribute('fill', slice.color);
			pathEl.setAttribute('stroke-linecap','round');

			svgEl.appendChild(pathEl);

			// slices text

			var text = document.createElement('div');

			text.className = 'l-center l-column pie-chart-text';
			text.style.position = 'absolute';
			text.style.opacity = 0;
			
		
			var svg_top = svgEl.getBoundingClientRect().top,
				svg_bottom = svgEl.getBoundingClientRect().bottom,
				svg_height = svgEl.getBoundingClientRect().height,
				svg_left = svgEl.getBoundingClientRect().left,
				svg_right = svgEl.getBoundingClientRect().right,
				svg_width = svgEl.getBoundingClientRect().width,

				path_top = pathEl.getBoundingClientRect().top,
				path_bottom = pathEl.getBoundingClientRect().bottom,
				path_left = pathEl.getBoundingClientRect().left,
				path_right = pathEl.getBoundingClientRect().right,
				semicol;
			
			text.style.width =  pathEl.getBoundingClientRect().width / svgEl.getBoundingClientRect().width * 100 + '%';
			text.style.height =  pathEl.getBoundingClientRect().height / svgEl.getBoundingClientRect().height * 100 + '%';
			text.style.top = ( path_top - svg_top ) / svg_height * 100 + '%';
			text.style.left =  ( path_left - svg_left ) / svg_width * 100 + '%';
			

			text.innerHTML = 
				'<div class="slice-title-frame">' + 
					'<div class="slice-title">' + slice.text + '</div><div class="slice-value">' + slice.value + '%</div>' +
				'</div>';
			
			svgHolder.appendChild(text);

			
			if ( similar( path_bottom , svg_bottom ) && slice.percent > .5 && i !== slices.length -1 ){				
				text.style.top = 'auto';
				text.style.bottom = 0;
				text.style.maxHeight = '50%';
			}

			if ( similar ( path_left , svg_left ) && slice.percent > .5 ){
				text.style.maxWidth = '50%';
			}

			if ( similar (path_top , svg_top ) && slice.percent < .5 ){
				text.style.maxWidth = '45%';
			}

			if ( slice.percent < .2 ){
				text.classList.add('is-label-external');
				
			}
			setTimeout( function (){
				text.style.opacity = '';
			},0);
						
		});

	};

	Pp._bake = function(){

		this.items.length && [].forEach.call ( this.items , function( item ) {

			var value = item.querySelector('table'),
				_self = this;

			item.classList.add( 'l-rela' );

			if( ! item.querySelector('.svg-holder') ){
				var pl = document.createElement('div');
				pl.className = 'svg-holder';
				pl.innerHTML = '<span></span>';
				item.appendChild(pl);
			}

			_self._pie_html( value , item );
			
			
		}.bind(this) );
	};

	Pp.main_loop = function(){ 
		
		if ( ! this.items.length ) return; 

		lib.on(['load','resize'], function(){

			this._bake();

		}.bind(this),100);

		$('.slider-4').on('beforeChange', function(){
			this._bake();
		}.bind(this));

	};

	new Pie_chart();

})(window.jQuery);