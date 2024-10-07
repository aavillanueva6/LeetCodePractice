// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// Constraints:

// 1 <= n <= 104
// nums.length == 2 * n
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sum = 0;
  nums.sort((a, b) => b - a);
  for (let i = 1; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
};

console.log(arrayPairSum([1, 4, 3, 2])); //4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); //9
