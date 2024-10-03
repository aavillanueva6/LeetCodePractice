// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxLength = 0;
  let currentLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentLength++;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 0;
    }
    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); //3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); //2
