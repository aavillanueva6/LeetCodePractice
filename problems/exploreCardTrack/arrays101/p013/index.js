// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// Constraints:

// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let tempEvens = [];
  let tempOdds = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      tempEvens.push(nums[i]);
    } else {
      tempOdds.push(nums[i]);
    }
  }
  return tempEvens.concat(tempOdds);
};

console.log(sortArrayByParity([3, 1, 2, 4])); //[2,4,3,1], [4,2,3,1], [2,4,1,3], or [4,2,1,3]
console.log(sortArrayByParity([0])); //[0]
