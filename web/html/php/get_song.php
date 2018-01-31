<?php

include("login.php");

if(!isset($_POST["song_id"])) exit();

$song_id = $_POST["song_id"];
if($result = mysqli_query("SELECT * FROM Library WHERE id=$song_id")){
	
	$row = $result->fetch_array(MYSQLI_ASSOC);
	echo $row;
	exit();
}

echo "Song not found";

?>