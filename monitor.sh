#!/bin/bash

LOG_FILE="./server/logs/access.log"
MONITOR_LOG="./monitor_requests.log"

REQUEST_COUNT=0

echo "Starting MEAN request monitor..."
echo "Monitoring file: $LOG_FILE"
echo "_________________________________" >> "MONITOR_LOG"

#	FOLLOW THE LOG FILE AND WRITE NEW REQUESTS TO MONITOR_REQUESTS.LOG
tail -F "$LOG_FILE" | while read -r line 
do 
  REQUEST_COUNT=$((REQUEST_COUNT + 1))

  TIMESTAMP=$(echo "$line" | awk -F '|' '{ print $1 }')
  METHOD_URL=$(echo "$line" | awk -F '|' '{ print $2 }')
  STATUS=$(echo "$line" | awk -F '|' '{ print $3 }')
  RESPONSE_TIME=$(echo "$line" | awk -F '|' '{ print $4 }')


  OUTPUT="[$REQUEST_COUNT] $TIMESTAMP | $METHOD_URL | $STATUS | $RESPONSE_TIME"

  echo "$OUTPUT" | tee -a "MONITOR_LOG"

done
