/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
 let start = 1;
    for(let i =1;i<nums.length;i++){
        if(nums[i] !== nums[start-1]){
            nums[start]=nums[i];
            start++
        }
    }
    return start
};
