<?php

header('Content-Type: text/html; charset=windows-1255');

$term = $_REQUEST['q'];

echo file_get_contents('https://www.universities-colleges.org.il/globalinc/GetCatlive_search.asp?q='.$term);