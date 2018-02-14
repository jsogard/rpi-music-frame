#! /bin/bash

dir="/home/pi"
file=""
t_sec=0

quit=`cat $dir/master/force_quit`
if [[ 1 -eq $quit ]]; then
	# if force quit is true
	echo 0 > $dir/master/force_quit
	exit
fi

# check if curr is empty
if [ -s "$dir/master/curr" ]; then
	# there is a song in curr
	file=`sed "1q;d" $dir/master/curr`
	t_sec=`sed "4q;d" $dir/master/curr`
elif [ -s "$dir/master/queue" ]; then
	# there is a song in the queue
	# pop the queue
	file=`sed "1q;d" $dir/master/queue`
	tail -n +2 $dir/master/queue > /tmp/queue && mv /tmp/queue $dir/master/queue
else
	# populate the up next
	$dir/master/populate_up_next.sh
	# pop the up next
	file=`sed "1q;d" $dir/master/up_next`
	tail -n +2 $dir/master/up_next > /tmp/up_next && mv /tmp/up_next $dir/master/up_next
fi

# load up the movie in background via `.play.sh`
$dir/master/.play.sh $file $t_sec > /dev/null &

# write info to curr
echo $file > $dir/master/curr 	# indicates file name
echo 0 >> $dir/master/curr	# indicates whether paused
echo $t_sec >> $dir/master/curr	# indicates current time


# start it
sleep 1
echo . > $dir/master/cmd
