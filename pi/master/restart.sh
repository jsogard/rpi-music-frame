#! /bin/bash
song=`cat /home/pi/master/curr`
echo "${song}:: Restarting" >> /home/pi/master/cmd.log 
/home/pi/master/stop.sh
sleep 1
/home/pi/master/start.sh $song

