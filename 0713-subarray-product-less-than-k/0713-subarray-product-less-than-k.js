/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (val < k) {
            result++;  // Individual element is also a valid subarray
            let start = i + 1;
            while (start < nums.length) {
                val *= nums[start];
                if (val < k) {
                    result++;
                    start++;
                } else {
                    break;
                }
            }
        }
    }
    return result;
};