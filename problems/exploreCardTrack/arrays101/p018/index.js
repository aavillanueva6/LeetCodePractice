// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // second attempt, removes second for loop
  let seenNums = new Set(nums);
  let ans = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (!seenNums.has(i)) {
      ans.push(i);
    }
  }
  return ans;

  // first attempt.
  /*
  let seenNums = new Set();
  for (let i = 0; i < nums.length; i++) {
    seenNums.add(i + 1);
  }
  for (let i = 0; i < nums.length; i++) {
    if (seenNums.has(nums[i])) {
      seenNums.delete(nums[i]);
    }
  }
  return [...seenNums];
  */
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); //[5,6]
console.log(findDisappearedNumbers([1, 1])); //[2]
