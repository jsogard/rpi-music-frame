<?php

$_POST["video_file"] = "Alt-J.Something.Good.mp4";

$video_path = "/home/pi/Videos/";
if(isset($_POST["video_file"])){
	$video_file = $_POST["video_file"];
	$cmd = "/home/pi/master/playmovie.sh ".$video_file;
	exec($cmd);
}

?>