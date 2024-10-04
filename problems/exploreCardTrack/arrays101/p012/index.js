// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // if (nums.length === 1) return nums;
  let slow = 0;
  let zeroSeen = false;
  for (let i = 0; i < nums.length; i++) {
    if (!zeroSeen && nums[i] === 0) {
      zeroSeen = true;
    } else if (!zeroSeen) slow++;
    if (nums[i] !== 0 && zeroSeen) {
      nums[slow] = nums[i];
      nums[i] = 0;
      slow++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); //[1,3,12,0,0]
console.log(moveZeroes([0])); //[0]
console.log(moveZeroes([1, 0])); //[1,0]
console.log(moveZeroes([1])); //[1]
console.log(moveZeroes([2, 1])); //[2,1]
console.log(moveZeroes([2, 0, 1])); //[2,1,0]
