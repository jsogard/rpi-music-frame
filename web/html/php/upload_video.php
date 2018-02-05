<?php

// log in to mysql server
include("login.php");

// get the id of new file
if($result = mysqli_query($link, "select id from Library order by id desc limit 1")){
	$new_id = mysqli_fetch_row($result)[0] + 1;
} else {
	
	exit();
}

$target_dir = "/home/pi/Videos/";
$songname = $_POST["name"];
$songartist = $_POST["artist"];
$file_name = $new_id . "%~" . preg_replace("/[^0-9a-zA-Z]+/", ".", basename($_FILES["video"]["name"]));
$target_file = $target_dir . $file_name;


// validate file
	
// Check if file already exists
if (file_exists($target_file)) {
	echo "Sorry, file already exists.";
	exit();
}

// Allow certain file formats
$vidFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
if($vidFileType != "mp4") {
	echo "Sorry, only mp4 files are allowed.";
	exit();
}


// actually upload the file

if(!move_uploaded_file($_FILES["video"]["tmp_name"], $target_file)){
	echo "Sorry, there was an error uploading your file";
	exit();
}

echo "The file ". basename( $_FILES["video"]["name"]). " has been uploaded.";
exec("chmod 755 $target_file");

$dur = array();
exec("mediainfo $target_file | grep -m 1 Duration | sed -n -e 's/^.*: //p'", $dur);

$dur = explode(" ", $dur[0]);
$time = "00:" . $dur[0] . ":" . $dur[2];
mysqli_query($link, "insert into Library (title, artist, duration, last_played) values ('$songname', '$songartist', '$time', NOW())");



?>