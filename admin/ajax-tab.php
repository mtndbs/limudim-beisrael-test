<?php
/**
 * This is for example purposes only!
 */

if ( empty( $_GET['get'] ) ) {
	header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
	exit;
}

$get = $_GET['get'];
$template = '../templates/'.$get.'.php';

if (file_exists($template)) {
	include $template;
} else {
	header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
	exit;
}
