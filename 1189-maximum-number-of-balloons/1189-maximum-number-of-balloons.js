/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
   let charCount = {};
    
    for(let char of text){
        charCount[char] = (charCount[char]||0)+1
    }
    let minCount = Infinity;
    minCount = Math.min(minCount,charCount['b']||0);
    minCount = Math.min(minCount,charCount['a']||0);
    minCount = Math.min(minCount,(charCount['l']||0)/2);
        minCount = Math.min(minCount,(charCount['o']||0)/2);
    minCount = Math.min(minCount,charCount['n']||0);
    
    return Math.floor(minCount)
};