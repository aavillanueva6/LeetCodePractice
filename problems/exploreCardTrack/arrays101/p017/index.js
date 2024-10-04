// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const seen = new Set();
  let firstMax = null;
  let secondMax = null;
  let thirdMax = null;
  for (let i = 0; i < nums.length; i++) {
    if (!seen.has(nums[i])) {
      seen.add(nums[i]);
      if (firstMax < nums[i] || typeof firstMax !== 'number') {
        thirdMax = secondMax;
        secondMax = firstMax;
        firstMax = nums[i];
      } else if (secondMax < nums[i] || typeof secondMax !== 'number') {
        thirdMax = secondMax;
        secondMax = nums[i];
      } else if (thirdMax < nums[i] || typeof thirdMax !== 'number') {
        thirdMax = nums[i];
      }
    }
  }
  console.log(firstMax, secondMax, thirdMax);
  return typeof thirdMax === 'number' ? thirdMax : firstMax;
};

console.log(thirdMax([3, 2, 1])); //1
console.log(thirdMax([2, 1])); //2
console.log(thirdMax([2, 3, 2, 1])); //1
console.log(thirdMax([1, 2, 0, -1])); //0
