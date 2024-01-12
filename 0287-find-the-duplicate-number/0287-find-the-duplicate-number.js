/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const numsObj = {};
    for(let i = 0;i<nums.length;i++){
        if(numsObj[nums[i]]){
            numsObj[nums[i]]++
        } else {
        numsObj[nums[i]] = 1

        }
    }
    for(let key in numsObj){
        console.log(numsObj[key])
        if(numsObj[key]>1){
            return parseInt(key)
        }
    }
};