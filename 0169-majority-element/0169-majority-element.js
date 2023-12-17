/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numsMap = {};
    for(let i = 0;i<nums.length;i++){
        if(numsMap[nums[i]]){
            numsMap[nums[i]]++
        } else {
            numsMap[nums[i]] = 1
        }
    }
    
    for(const key in numsMap){
        if(numsMap[key]> Math.floor(nums.length/2)){
            return key
        }
    }
};