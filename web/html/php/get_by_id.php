<?php

if(isset($_POST["id"])){
	$id = $_POST["id"];
}

$base_dir = "/home/pi/Videos/";
$arr = array();
exec("ls " . $base_dir . " | grep " . $id . "%~", $arr);

echo $arr[0];

?>