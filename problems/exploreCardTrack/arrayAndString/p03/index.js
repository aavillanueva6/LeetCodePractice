// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var recurrence = function (digits, i) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else if (i === 0) {
      digits[i] = 0;
      digits.unshift(1);
      return digits;
    } else {
      digits[i] = 0;
      i--;
      return recurrence(digits, i);
    }
  };
  return recurrence(digits, digits.length - 1);
};

console.log(plusOne([1, 2, 3])); //[1,2,4]
console.log(plusOne([4, 3, 2, 1])); //[4,3,2,2]
console.log(plusOne([9])); //[1,0]
console.log(plusOne([9, 9])); //[1,0,0]
console.log(plusOne([2, 9])); //[3,0]
