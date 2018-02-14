
# $1 is the order number. -1 for last
# $2 is filename


queue="/home/pi/master/queue"
if [[ $1 -eq -1 ]]; then
	echo $2 >> $queue
	exit
fi

cat $queue | head -$1 > /tmp/queue
echo $2 >> /tmp/queue
cat $queue | tail -n +$(expr $1 + 1) >> /tmp/queue
mv /tmp/queue $queue
