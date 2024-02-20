/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length === 0) return true

    let sPointer = 0;

    for(let i =0;i<t.length;i++){
        if(s[sPointer]===t[i]) sPointer++
    }
    return sPointer === s.length
};