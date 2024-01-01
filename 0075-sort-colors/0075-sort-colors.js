/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(arr) {
  let low = 0, high = arr.length - 1, i = 0;
    while (i <= high) {
      if (arr[i] === 0) {
        [arr[i], arr[low]] = [arr[low], arr[i]]; // swap
        i += 1;
        low += 1;
      } else if (arr[i] === 1) {
        i += 1;
      } else { // the case for arr[i] === 2
        [arr[i], arr[high]] = [arr[high], arr[i]]; // swap
        high -= 1;
      }
    }
    return arr
};