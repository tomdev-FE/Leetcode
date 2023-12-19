/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let i = 0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            let temp = nums[i]+nums[i+1];
            nums[i+1]=0
            nums[i]= temp
        }
    }
    let nonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
    
    return nums
};