// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Constraints:

// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    rightSum += Number(nums[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (rightSum === leftSum) return i;
    leftSum += nums[i];
  }
  return -1;
};

// console.log(pivotIndex([1, 7, 3, 6, 5, 6])); //3
// console.log(pivotIndex([1, 2, 3])); //-1
// console.log(pivotIndex([2, 1, -1])); //0
// console.log(pivotIndex([-1, 1, 2])); //2
console.log(pivotIndex([-1, -1, -1, 1, 1, 1])); //-1
console.log(pivotIndex([-1, -1, 0, 1, 1, 0])); //5
