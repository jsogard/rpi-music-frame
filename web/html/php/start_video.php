<?php

$video_path = "/home/pi/Videos/";
if(isset($_POST["video_file"])){
	$video_file = $_POST["video_file"];

	exec("omxplayer -o hdmi ".$video_path.$video_file." < /tmp/cmd");
	exec("echo . > /tmp/cmd");
}

?>