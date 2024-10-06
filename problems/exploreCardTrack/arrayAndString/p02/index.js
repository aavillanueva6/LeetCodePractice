// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

// Constraints:

// 2 <= nums.length <= 50
// 0 <= nums[i] <= 100
// The largest element in nums is unique.

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  // refactor to improve runtime and memory usage
  let largest = [0, 0];
  let second = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest[0]) {
      second = largest[0];
      largest[0] = nums[i];
      largest[1] = i;
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }
  return largest[0] / second >= 2 ? largest[1] : -1;

  /*
  // initial solution
  let largest = [0, 0];
  let second = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest[0]) {
      second = [...largest];
      largest[0] = nums[i];
      largest[1] = i;
    } else if (nums[i] > second[0]) {
      second[0] = nums[i];
    }
  }
  return largest[0] / second[0] >= 2 ? largest[1] : -1;
  */
};

console.log(dominantIndex([3, 6, 1, 0])); //1
console.log(dominantIndex([1, 2, 3, 4])); //-1
console.log(dominantIndex([0, 0, 2, 3])); //-1
console.log(dominantIndex([0, 0, 3, 2])); //-1
