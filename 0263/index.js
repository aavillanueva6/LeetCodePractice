/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) {
    return false;
  }
  while (n % 2 === 0) {
    n = n / 2;
  }
  while (n % 3 === 0) {
    n = n / 3;
  }
  while (n % 5 === 0) {
    n = n / 5;
  }
  return n === 1 ? true : false;
};

console.log(isUgly(6)); // true
console.log(isUgly(1)); // true
console.log(isUgly(14)); // false
console.log(isUgly(-8)); // false
console.log(isUgly(0)); // false
