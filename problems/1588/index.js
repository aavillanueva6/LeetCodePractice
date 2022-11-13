/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 1; i <= arr.length; i += 2) {
    for (let j = 0; j < arr.length + 1 - i; j++) {
      let count = 0;
      let k = j;
      while (count < i) {
        sum += arr[k];
        count++;
        // console.log(i, j, sum, count);
        k++;
      }
    }
  }
  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); //58
console.log(sumOddLengthSubarrays([1, 2])); //3
console.log(sumOddLengthSubarrays([10, 11, 12])); //66
