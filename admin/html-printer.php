<?php

	include ( 'fake-data.php' );
	
	function is ($conds){
		
		$conds = explode ( ',' , $conds);

		foreach ( $conds as $cond ){
			
			if ( strpos( $_SERVER['REQUEST_URI'] , $cond ) ) {
				return true;
			}
		}
		
		return false; 

	}

	function is_not ($conds){
		
		$conds = explode ( ',' , $conds);

		foreach ( $conds as $cond ){
			
			if ( ! strpos( $_SERVER['REQUEST_URI'] , $cond ) ) {
				return false;
			}
		}
		
		return true; 

	}

	function template_name(){

		$name = basename( $_SERVER['REQUEST_URI'] );
		$name = str_replace( '_','', $name );
		$name = str_replace( '.php','', $name );
		
		return $name;
	}
	template_name();

	function lis($list){

		$lis = explode(PHP_EOL,$list);

		echo 
		'
		<li>
			<a href="#">
		'.

				implode ( '</a></li><li><a href="#">', $lis ).

		'	</a>
		</li>';

	}

	function sanitize_output($buffer) {

		$search = array(
			'/\>[^\S ]+/s',     // strip whitespaces after tags, except space
			'/[^\S ]+\</s',     // strip whitespaces before tags, except space
			'/(\s)+/s',         // shorten multiple whitespace sequences
			'/<!--(.|\s)*?-->/' // Remove HTML comments
		);

		$replace = array(
			'>',
			'<',
			'\\1',
			''
		);

		$buffer = preg_replace($search, $replace, $buffer);

		return $buffer;
	}

	function html(){
		
		global $includes;
		
		if ( empty( $includes ) ) return;

		foreach( $includes as $include ){
			include ( $include );
		}

	}
	
	ob_start();

	html();

	file_put_contents( $html_file_name . '.html', ob_get_clean() );

	html();

	// unminified compy for dev
	if(!@$dev_only) file_put_contents ( '_not-minified-html-for-backend-dev/' . $html_file_name . '.html', file_get_contents( $html_file_name . '.html' ) );

	
	// minify for production
	file_put_contents ( $html_file_name . '.html', sanitize_output( file_get_contents( $html_file_name . '.html' ) ) );
	