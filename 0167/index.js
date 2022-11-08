/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let seen = new Set();
  for (let i = 0; i < numbers.length; i++) {
    if (seen.has(numbers[i])) continue;
    else seen.add(numbers[i]);
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1,2] // this problem uses a 1 indexed array, instead of a standard zero-indexed array
console.log(twoSum([2, 3, 4], 6)); // [1,3]
console.log(twoSum([-1, 0], -1)); // [1,2]
