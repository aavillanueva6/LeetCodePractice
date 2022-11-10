var isPowerOfFour = function (n) {
  if (n <= 0) {
    return false;
  }
  while (n > 1) {
    if (n % 4 !== 0) {
      return false;
    }
    n /= 4;
  }
  return true;
};

console.log(isPowerOfFour(16)); //true
console.log(isPowerOfFour(5)); //false
console.log(isPowerOfFour(1)); //true
