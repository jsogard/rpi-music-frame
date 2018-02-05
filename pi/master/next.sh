
# if queue is empty pick a random song
if [ ! -s /home/pi/master/queue ]; then
	/home/pi/master/random.sh
	exit 0
fi

echo "Going to next song" >> /home/pi/master/cmd.log
next=`sed -n "1p" /home/pi/master/queue`
rest=`sed "1d" /home/pi/master/queue`
# assuming video is already stoped
/home/pi/master/start.sh $next
> /home/pi/master/queue
for i in $rest;
do
	echo $i >> /home/pi/master/queue
done
