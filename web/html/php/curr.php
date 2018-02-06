<?php 

$arr = array();
exec("cat /home/pi/master/curr", $arr);
echo json_encode($arr);


/*

curr must be of the form:
========
3%~song.mp4
1
242
211
========

representing the following:
========
song_file
is_paused
maximum_sec
current_sec
========

when no song is playing it should be empty

*/

?>