<?php

//header( 'Content-Type: text/html; charset=windows-1255' );

$opts = array(
	'http' => array(
		'method'=> "GET",
		'header'=> "Cookie: Temp=Login=1;"
	)
);

$context = stream_context_create($opts);

echo file_get_contents( 'https://new.universities-colleges.org.il/getcolleges.asp?query=' . urlencode($_GET['query']), false, $context );
