#!/bin/bash
set -x

LOG_FILE="./server/logs/access.log"
MONITOR_LOG="./monitor_requests.log"

echo "starting MEAN request monitor..."
echo "Monitoring file: $LOG_FILE"

#	FOLLOW THE LOG FILE AND WRITE NEW REQUESTS TO MONITOR_REQUESTS.LOG
tail -F "$LOG_FILE" >> "$MONITOR_LOG"

