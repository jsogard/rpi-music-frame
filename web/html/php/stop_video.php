<?php

exec("echo -n q > /home/pi/master/cmd");
exec("echo 'stop_video.php: video quit' >> /home/pi/master/logs");

?>