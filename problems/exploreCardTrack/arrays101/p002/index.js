// Given an array nums of integers, return how many of them contain an even number of digits.
// Constraints:

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (String(nums[i]).length % 2 === 0) {
      count++;
    }
  }
  return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896])); //2
console.log(findNumbers([555, 901, 482, 1771])); //1
