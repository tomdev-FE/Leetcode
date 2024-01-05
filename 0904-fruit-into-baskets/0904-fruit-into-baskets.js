/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let max = -Infinity;
    let start = 0, fruitsTypes = {};
    
    for(let end = 0;end<fruits.length;end++){
        let right = fruits[end];
         if (!(right in fruitsTypes)) {
        fruitsTypes[right] = 0;
      }
      fruitsTypes[right] += 1;
        
        while(Object.keys(fruitsTypes).length > 2){
            let left = fruits[start];
            fruitsTypes[left] -= 1;
            if(fruitsTypes[left]===0){
                delete fruitsTypes[left]
            }
            start++
        }
        max = Math.max(max,end-start+1)
    }
    return max
};