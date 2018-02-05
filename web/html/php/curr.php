<?php 

$arr = array();
exec("cat /home/pi/master/curr", $arr);
echo json_encode($arr);


/*

curr must be of the form:
========
3
Something Good
Alt-J
true
142
211
========

representing the following:
========
song_id
title
artist
is_paused
current_sec
maximum_sec
========

when no song is playing it should be empty

*/

?>