/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 const charIndexMap = {}; // Object to store the index of each character in the string
    let maxLength = 0;
    let start = 0; // Start of the current substring without repeating characters

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // If the character is already in the current substring, update the start pointer
        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }

        // Update the index of the current character in the object
        charIndexMap[currentChar] = end;

        // Update the maximum length if the current substring is longer
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};