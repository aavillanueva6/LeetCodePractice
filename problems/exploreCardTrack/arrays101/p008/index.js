// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Constraints:

// 2 <= arr.length <= 500
// -103 <= arr[i] <= 103

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === 2 * arr[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(checkIfExist([10, 2, 5, 3])); //true
console.log(checkIfExist([3, 1, 7, 11])); //false
