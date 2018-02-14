#! /bin/bash

DIR="/home/pi"

is_in_queue() {
    add=1
    for q in $( cat "$DIR/master/up_next" ); do
        if [[ $q == $1 ]]; then
            add=0
            break
        fi
    done
    
    if [[ $add -eq 1 ]]; then
        echo $1 >> "$DIR/master/up_next"
    fi
    return $add
}

LIBSIZE=`ls "$DIR/Videos" | wc -l`
MAXQUEUE=`expr $LIBSIZE / 3`
QUEUESIZE=`cat "$DIR/master/up_next" | wc -l`

for i in $(seq $QUEUESIZE $MAXQUEUE); do
    song=0
    added=0
    while [[ $added -eq 0 ]]; do
	song=$(ls $DIR/Videos | sed -n $(expr 1 + $RANDOM % $LIBSIZE)p)
        is_in_queue $song
        added=$?
    done
done
