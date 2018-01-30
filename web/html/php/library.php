<?php

include("login.php");

$video_arr = array();
if($result = mysqli_query($link, "SELECT * FROM Library")){

	while($row = $result->fetch_array(MYSQLI_ASSOC)){
		$video_arr[] = $row;
	}
	echo json_encode($video_arr, JSON_PRETTY_PRINT);
	exit();
}

echo "An error occured";


?>