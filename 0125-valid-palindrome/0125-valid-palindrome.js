/**
 * @param {string} s
 * @return {boolean}
 */
function isAlpha(c) {
  return (c >= 65 && c <= 90) || (c >= 97 && c <= 122) || (c >= 48 && c<= 57);
}
var isPalindrome = function(s) {
  // Remove non-alphanumeric characters and convert to lowercase
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the cleaned string is a palindrome
    return cleanedString === cleanedString.split('').reverse().join('');
};