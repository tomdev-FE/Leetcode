/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
     const result = [];

    // Function to check if a string is a palindrome
    const isPalindrome = (str, start, end) => {
        while (start < end) {
            if (str[start] !== str[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    };

    // Backtracking function
    const backtrack = (start, currentList) => {
        if (start === s.length) {
            result.push([...currentList]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                currentList.push(s.substring(start, end + 1));
                backtrack(end + 1, currentList);
                currentList.pop();
            }
        }
    };

    backtrack(0, []);

    return result;
};