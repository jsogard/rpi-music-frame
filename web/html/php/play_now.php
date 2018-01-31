<?php

if(!isset($_POST["video_id"])) exit();

$video_id = $_POST["video_id"];
exec("/home/pi/master/get_file.sh $video_id | /home/pi/master/switch.sh");

?>