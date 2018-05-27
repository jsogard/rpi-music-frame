<?php

if( !isset($_POST["action"]) || !isset($_POST["song_id"])) exit();

$id = $_POST["song_id"];
include("get_file.php"); // sets $file_name
$base_dir = "/home/pi/master";

exec("$base_dir/log.sh 'play.php: $file_name set to play $action");

switch($_POST["action"]){
	case "now":
		exec("$base_dir/switch.sh $file_name");
		break;
	case "next":
		exec("$base_dir/queue.sh 0 $file_name");
		break;
	case "queue":
		exec("$base_dir/queue.sh -1 $file_name");
		break;
}



?>