cat /home/pi/master/curr >> /home/pi/master/cmd.log
echo ":: Switching to [$1]" >> /home/pi/master/cmd.log
/home/pi/master/stop.sh
sleep 1
/home/pi/master/start.sh $1
 
