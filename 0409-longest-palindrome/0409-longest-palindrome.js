/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let freq = {};
    
    for(let c of s){
            freq[c] = (freq[c] || 0) + 1;
    }
    let length = 0;
    let oddFound = false;
    
    for(let val of Object.values(freq)){
        if (val % 2 === 0) {
                length += val;
            } else {
                length += val - 1;
                oddFound = true;
            }
    }
    if(oddFound) length++;
    
    return length
};