/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let numsMap = {};
    let result = [];
    for(let i = 0;i<nums.length;i++){
        if(numsMap[nums[i]]){
            numsMap[nums[i]]++
        } else {
            numsMap[nums[i]] = 1
        }
    }
    
    for(const key in numsMap){
        if(numsMap[key]> Math.floor(nums.length/3)){
            result.push(key)
        }
    }
    return result
};