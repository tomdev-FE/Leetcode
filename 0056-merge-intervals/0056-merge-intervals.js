/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
      if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a,b)=> a[0]-b[0]);
    let mergedIntervals = [intervals[0]];
    
    for(let i = 0;i<intervals.length;i++){
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length-1];
          if (currentInterval[0] <= lastMergedInterval[1]) {
            // Merge overlapping intervals
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // Add non-overlapping interval to the result
            mergedIntervals.push(currentInterval);
        }
    }
    return mergedIntervals;
};