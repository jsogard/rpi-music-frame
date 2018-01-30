<?php

// exec("/home/pi/master/playmovie.sh Alt-J.Something.Good.mp4");

// $_POST["video_file"] = "Alt-J.Something.Good.mp4";

// $video_path = "/home/pi/Videos/";
if(isset($_POST["video_file"])){
	$video_file = $_POST["video_file"];
	exec("/home/pi/master/playmovie.sh $video_file");
	
}

//  *** stack smashing detected ***: /usr/bin/omxplayer.bin terminated
// /usr/bin/omxplayer: line 67:  7274 Aborted                 LD_LIBRARY_PATH="$OMXPLAYER_LIBS${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}" $OMXPLAYER_BIN "$@"

// [1]+  Exit 134                omxplayer -o hdmi /home/pi/Videos/Alt-J.Something.Good.mp4 < /home/pi/master/cmd > /dev/null




?>