/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let start = 0;
    let result = [];
    let windowSum = 0.0;
    for(let end =0;end<nums.length;end++){
        windowSum += nums[end];
        if(end>=k-1){
            result.push(windowSum/k);
            windowSum -= nums[start];
            start++
        }
    }
    const maxAverage = Math.max(...result);
    return maxAverage
};