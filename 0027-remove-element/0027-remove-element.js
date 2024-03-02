/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let start=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            let temp=nums[start]
            nums[start]=nums[i];
            nums[i]=temp
            start++
        }
         console.log(nums)
    }
   
    return start
};