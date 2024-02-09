/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a,b)=>a[1]-b[1]);
    let currentEnd = -Infinity;
    let chainCount = 0;
    
    for(let pair of pairs){
        if(pair[0]>currentEnd){
            currentEnd=pair[1];
            chainCount++
        }
    }
    return chainCount
};