/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let balance =0,counter=0;
    
    for(let c of s){
        balance += c === '(' ? 1 : -1;
        if(balance===-1){
            counter++;
            balance++
        }
    }
    return balance+counter
};