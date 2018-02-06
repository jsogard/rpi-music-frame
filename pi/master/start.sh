#! /bin/bash
if [ -z "$1" ]; then
	echo "File not supplied"
	exit 1
fi

/home/pi/master/.play.sh $1 > /dev/null &
#omxplayer -o hdmi /home/pi/Videos/$1 < /home/pi/master/cmd > /dev/null &
echo "$1:: Starting" >> /home/pi/master/cmd.log
echo . > /home/pi/master/cmd
 
