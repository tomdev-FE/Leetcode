/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
 const n = nums.length;
  const allNums = Array.from({length: n}, (_, i) => i + 1);
  const inputNums = new Set(nums);
  
  return allNums.filter(x => !inputNums.has(x));
};