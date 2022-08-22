/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  function rtGreater(lower, upper) {
    const mid = (lower + upper) / 2;
    const check = mid * mid;
    if (check - x < 0.00001 && check - x > 0) {
      return Math.floor(mid);
    } else if (check > x) {
      return rtGreater(lower, mid);
    } else {
      return rtGreater(mid, upper);
    }
  }

  if (x === 1) {
    return 1;
  } else if (x > 1) {
    return rtGreater(1, x);
  } else {
    return 0;
  }
};

console.log(mySqrt(0.1)); //0

console.log(mySqrt(1)); //1

console.log(mySqrt(4)); //2

console.log(mySqrt(8)); //2
