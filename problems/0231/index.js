var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false; // returns false if n is 0 or negative
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false; // returns false if dividing by two leaves a remainder
    }
    n /= 2;
  }
  return true;

  /*
  return Number.isInteger(Math.log(n) / Math.log(2));
  // this should work, but there seems to be a rounding error when using very large powers of 2 (2^29, 31, 39, 47, 51, 55, 58, 59, etc)
  */
};

console.log(isPowerOfTwo(1)); //true
console.log(isPowerOfTwo(16)); //true
console.log(isPowerOfTwo(3)); //false
console.log(isPowerOfTwo(536870912)); //true
