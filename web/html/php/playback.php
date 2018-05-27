<?php

if( !isset($_POST["action"]) ) exit();

$base_dir = "/home/pi/master";

switch($_POST["action"]){
	case "pause":
	case "play":
		exec("$base_dir/pause.sh");
		break;
	case "next":
		exec("$base_dir/next.sh");
		break;
	case "stop":
		exec("$base_dir/force_quit.sh");
		break;
}

?>