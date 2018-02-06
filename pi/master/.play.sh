#! /bin/bash
omxplayer -ohdmi -l $2 /home/pi/Videos/$1 < /home/pi/master/cmd
> /home/pi/master/curr
/home/pi/master/startup.sh
