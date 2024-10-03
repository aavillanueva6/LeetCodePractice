// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      console.log(i);
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
  return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])); //[1,0,0,2,3,0,0,4]
console.log(duplicateZeros([1, 2, 3])); //[1,2,3]
