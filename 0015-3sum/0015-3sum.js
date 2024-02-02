/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    const n = nums.length;

    for (let k = 0; k < n - 2; k++) {
        if (k > 0 && nums[k] === nums[k - 1]) {
            continue; // Skip duplicate values of k
        }

        let left = k + 1;
        let right = n - 1;

        while (left < right) {
            const sum = nums[k] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[k], nums[left], nums[right]]);

                // Skip duplicates for left and right
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return result;
};
