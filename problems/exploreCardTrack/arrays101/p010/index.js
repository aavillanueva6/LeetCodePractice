// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.
// Constraints:

// 1 <= arr.length <= 104
// 1 <= arr[i] <= 105

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  //second attempt
  if (arr.length === 1) {
    arr[0] = -1;
    return arr;
  }

  let max = -1;
  let temp = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      temp = arr[i];
      arr[i] = max;
      max = temp;
    } else {
      arr[i] = max;
    }
  }

  return arr;

  // first attempt with bad time complexity
  /*
  if (arr.length === 1) {
    arr[0] = -1;
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let rightMax = arr[i + 1];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > rightMax) rightMax = arr[j];
    }
    arr[i] = rightMax;
  }
  arr[arr.length - 1] = -1;
  return arr;
  */
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); //[18,6,6,6,1,-1]
console.log(replaceElements([400])); //[-1]
