/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
  var i = 0;
  var j = s.length - 1;
  var m = '';
  var n = '';
  while (i < j) {
    m = s[i].toLowerCase();
    n = s[j].toLowerCase();
    if (!isLetterOrDigit(m)) i++;
    else if (!isLetterOrDigit(n)) j--;
    else if (m === n) { i++; j--; }
    else return false;
  }
  return true;
};

var isLetterOrDigit = function (c) {
  return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
};
