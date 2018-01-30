<?php

if(isset($_POST["video_file"])){
	$video_file = $_POST["video_file"];
	exec("/home/pi/master/start.sh $video_file");
	
}


?>