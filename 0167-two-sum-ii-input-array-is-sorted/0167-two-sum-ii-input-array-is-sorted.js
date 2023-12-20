/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let result = [];
    
    if(!numbers || numbers.length < 2){
        return result
    }
    
    let left = 0;
    let right = numbers.length -1;
    
    while(left<right){
        const sum = numbers[left]+numbers[right];
        if(sum===target){
            result[0]=left+1;
            result[1]=right+1;
            break;
        } else if(sum>target){
            right--
        } else {
            left++
        }
    }
    return result
};