<?php

$video_path = "/home/pi/Videos/";
$video_arr = scandir($video_path);
echo json_encode($video_arr, JSON_PRETTY_PRINT);


?>