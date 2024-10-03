// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  if (arr[0] >= arr[1]) return false;
  let peak = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return false;
    if (peak === false && arr[i] > arr[i + 1]) {
      peak = true;
    } else if (peak === true && arr[i] < arr[i + 1]) return false;
  }
  if (peak === false) return false;
  return true;
};

console.log(validMountainArray([2, 1])); //false
console.log(validMountainArray([3, 5, 5])); //false
console.log(validMountainArray([0, 3, 2, 1])); //true
console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); //false
console.log(validMountainArray([0, 1, 2, 1, 2])); //false
