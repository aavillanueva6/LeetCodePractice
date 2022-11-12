/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] - arr[i + 1] !== arr[i + 1] - arr[i + 2]) return false;
  }
  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1])); //true
console.log(canMakeArithmeticProgression([1, 2, 4])); //false
console.log(canMakeArithmeticProgression([1, 2])); //false
