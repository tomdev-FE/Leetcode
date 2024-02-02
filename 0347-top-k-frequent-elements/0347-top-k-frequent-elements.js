/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
      const freq = {};
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  console.log(sorted)
  return sorted.slice(0, k).map(entry => Number(entry[0]));
}