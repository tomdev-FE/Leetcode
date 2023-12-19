/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
     if (!matrix || !matrix[0]) {
        return []
    }

    let n = matrix.length
    let m = matrix[0].length //counter for rows / cols
    let row = 0,
        col = 0,
        total = n * m
    let direction = true //true for up, False for down
    let result = []
    while (total) {
        result.push(matrix[row][col])
        total -= 1

        if (direction) { //going up
            if (row == 0 || col == m - 1) {
                direction = false
                if (col == m - 1) {
                    row += 1
                } else {
                    col += 1
                }
            } else {
                row -= 1
                col += 1
            }
        } else { //going down : the same as going up, just reversed
            if (col == 0 || row == n - 1) {
                direction = true
                if (row == n - 1) {
                    col += 1
                } else {
                    row += 1
                }
            } else {
                row += 1
                col -= 1
            }
        }
    }
    return result
};


