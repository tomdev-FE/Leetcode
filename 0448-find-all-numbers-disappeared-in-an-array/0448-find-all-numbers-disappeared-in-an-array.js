/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i =0;
    let missedNumbers = []
    while(i<nums.length){
        const j = nums[i] -1;
        if(nums[i]!==nums[j]){
            [nums[i],nums[j]]=[nums[j],nums[i]]
        } else{
            i++
        }
    }
    for(let i =0;i<nums.length;i++){
        if(nums[i]!==(i+1)){
            missedNumbers.push(i+1)
        }
    }
    return missedNumbers
};