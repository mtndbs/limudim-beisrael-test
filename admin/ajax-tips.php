<?php
/**
 * This is for example purposes only!
 */

// Array of items to fetch.
// For example: [5, 6]
$itemIndex = $_GET['itemIndexes'];

// Response should be array of 'item index' => 'item html'
// For example: [ 5 => '<div>item number 5</div>', 6 => '<div>item number 5</div>' ]
$response = array();

foreach ($itemIndex as $itemIndex) {
	ob_start();

	$sampleContent = @file_get_contents('http://loripsum.net/api/2/short'); // lorem ipsum..

	if (! $sampleContent) {
		$sampleContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Primum in nostrane potestate est';
	}

	include dirname(__FILE__).'/example/loop-tip.php';
	$response[ $itemIndex ] = ob_get_clean();
}

// Return in json.
echo json_encode($response);
