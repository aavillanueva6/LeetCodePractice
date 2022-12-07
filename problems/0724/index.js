/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  /*
  let leftSum = 0;
  let rightSum = nums[nums.length - 1];
  for (let i = 0, j = nums.length - 2; i < nums.length, j > -1; ) {
    if (leftSum === rightSum && i === j) {
      return i;
    } else if (leftSum < rightSum) {
      leftSum += nums[i];
      i++;
    } else {
      rightSum += nums[j];
      j--;
    }
  }
  return -1;
  */
  let leftSumMap = new Map();
  let rightSumMap = new Map();
  let leftSumTemp = 0;
  let rightSumTemp = 0;
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    leftSumTemp += nums[i];
    rightSumTemp += nums[j];
    leftSumMap.set(i, leftSumTemp);
    rightSumMap.set(j, rightSumTemp);
  }
  if (rightSumMap.get(1) === 0) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (rightSumMap.get(i) === leftSumMap.get(i)) return i;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); //3
console.log(pivotIndex([1, 2, 3])); //-1
console.log(pivotIndex([2, 1, -1])); //0
console.log(pivotIndex([-1, -1, -1, -1, -1, 0])); //2
