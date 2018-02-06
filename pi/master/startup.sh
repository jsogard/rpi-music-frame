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
	# play a random song
	file=`ls $dir/Videos | head -$((RANDOM%$(ls $dir/Videos | wc -w)+1)) | tail -1`
fi

# load up the movie in background via `.play.sh`
$dir/master/.play.sh $file $t_sec > /dev/null &

# write info to curr
echo $file > $dir/master/curr
echo 0 >> $dir/master/curr
echo $t_sec >> $dir/master/curr


# start it
sleep 1
echo . > $dir/master/cmd
