<?php

function debug( $data ){
	echo '<pre>';
	var_dump ($data);
	echo '</pre>';
}

$files = glob('*.{svg}', GLOB_BRACE);
$arr = array();
$scss = '';

foreach($files as $file) {

	$content = file_get_contents( $file );
	$s = explode('viewBox="', $content );
	$t = explode('">',$s[1]);
	$t = explode('"',$t[0]);
	$viewbox = $t[0];
	
	$content = explode('-->',$content);
	
	$content = array_splice( $content , 1 );
	
	if( ! empty ( $content[0] ) ) {
		$content =  explode('>',$content[0]);
	}
	$content = array_splice( $content , 1 );
	$content = implode('>',$content);
	$content = str_replace('</svg>','',$content);

	// remove fill tag start 
	/*
	$content_as_array = explode(" ",$content); 

	for($i = 0 ; $i < sizeof( $content_as_array ) ; $i++){

		
		if ( strrpos ( $content_as_array[$i] , 'fill') === 0 ){

			$content_as_array[$i] = '';

		}
		
	}

	$content = implode(" ",$content_as_array);
	// remove fill tag end
	*/

	$width = preg_split('/\s+/' , $viewbox )[2];
	$height = preg_split('/\s+/' , $viewbox )[3];

	$arr[basename ( $file , ".svg" )] = array (
		
		'viewbox' => $viewbox,
		'content' => $content,
		'width' => $width,
		'height' => $height,
	);

	$scss .= 
'.icon-' . basename ( $file , ".svg" ) . ' { 
	width : runner( ' . $width . ' );
	height : runner( ' . $height . ' );
}
' ;

}


$json = 'export let symbols = ' .json_encode($arr,JSON_PRETTY_PRINT) . ';';
//debug( $arr );

echo $json;
$fp = fopen('symbols.js',"wb");
fwrite($fp,$json);
fclose($fp);

$fp = fopen('_symbols.scss',"wb");
fwrite($fp,$scss);
fclose($fp);