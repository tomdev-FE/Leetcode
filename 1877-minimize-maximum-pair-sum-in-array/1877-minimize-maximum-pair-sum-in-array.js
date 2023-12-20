/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
   nums.sort((a,b)=>a-b);
     // Initialize pointers
    let left = 0;
    let right = nums.length - 1;

    // Initialize the maximum pair sum
    let maxPairSum = -Infinity;

    // Iterate until pointers meet
    while (left < right) {
        // Calculate the pair sum
        const pairSum = nums[left] + nums[right];

        // Update the maximum pair sum if needed
        maxPairSum = Math.max(maxPairSum, pairSum);

        // Move pointers towards each other
        left++;
        right--;
    }

    return maxPairSum;
    
};

