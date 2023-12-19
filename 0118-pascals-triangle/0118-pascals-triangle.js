/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(n) {
     let result = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < i + 1; j++) {
            if (j == 0 || j == i) {
                row[j] = 1;
            } else {
                row[j] = result[i - 1][j - 1] + result[i - 1][j];
            }
        }
        result.push(row);
    }
    return result;
};