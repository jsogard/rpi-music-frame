<?php

if( !isset($_POST["action"]) || !isset($_POST["song_id"])) exit();

$id = $_POST["song_id"];
include("get_file.php"); // sets $file_name
$base_dir = "/home/pi/master";

switch($_POST["action"]){
	case "now":
		exec("$base_dir/switch.sh $file_name");
		break;
	case "next":
		exec("echo $file_name |cat - $base_dir/queue > /tmp/out && mv /tmp/out $base_dir/queue");
		break;
	case "queue":
		exec("$file_name >> $base_dir/queue");
		break;
}



?>