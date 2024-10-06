// Given two binary strings a and b, return their sum as a binary string.

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let ans = '';
  let flag = 0;
  let maxLength = Math.max(a.length, b.length);
  if (a.length > b.length) {
    b = b.padStart(maxLength, '0');
  } else if (b.length > a.length) {
    a = a.padStart(maxLength, '0');
  }

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === '1' && b[i] === '1' && flag === 0) {
      ans = '0'.concat(ans);
      flag = 1;
    } else if (a[i] === '1' && b[i] === '1' && flag === 1) {
      ans = '1'.concat(ans);
      flag = 1;
    } else if (a[i] === '0' && b[i] === '0' && flag === 0) {
      ans = '0'.concat(ans);
      flag = 0;
    } else if (a[i] === '0' && b[i] === '0' && flag === 1) {
      ans = '1'.concat(ans);
      flag = 0;
    } else if (
      ((a[i] === '1' && b[i] === '0') || (a[i] === '0' && b[i] === '1')) &&
      flag === 0
    ) {
      ans = '1'.concat(ans);
      flag = 0;
    } else if (
      ((a[i] === '1' && b[i] === '0') || (a[i] === '0' && b[i] === '1')) &&
      flag === 1
    ) {
      ans = '0'.concat(ans);
      flag = 1;
    }
  }
  if (flag === 1) ans = '1'.concat(ans);
  return ans;
};

console.log(addBinary('11', '1')); //'100'
console.log(addBinary('1010', '1011')); //'10101
