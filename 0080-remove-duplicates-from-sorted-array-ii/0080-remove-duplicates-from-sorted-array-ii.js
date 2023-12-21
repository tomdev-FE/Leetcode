/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
     if (nums.length <= 2) {
        return nums.length;
    }
    let k = 2;
    
    for(let i=2;i<nums.length;i++){
        if(nums[k-2] !== nums[i]){
            nums[k] = nums[i];
            k++
        }
    }
    console.log(k)
    return k
};