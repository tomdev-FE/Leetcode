/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
     // Check if the input array is not empty
    if (words.length === 0) {
        return false;
    }

    // Extract the first character from each word and concatenate them
    const acronym = words.map(word => word.charAt(0)).join('');

    // Check if the generated acronym matches the input string (case-sensitive)
    return acronym === s;
};