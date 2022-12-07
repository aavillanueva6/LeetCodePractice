/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
  }
  return nums;
};

console.log(runningSum([1, 2, 3, 4])); //[1,3,6,10]
console.log(runningSum([3, 1, 2, 10, 1])); //[3,4,6,16,17]
console.log(runningSum([1, 1, 1, 1, 1])); //[1,2,3,4,5]
