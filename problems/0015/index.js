/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let seen = new Set();
  let ansArr = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (seen.has(nums[i])) continue;
    seen.add(nums[i]);
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        ansArr.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return ansArr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); //[]
console.log(threeSum([0, 0, 0])); //[[0,0,0]]
console.log(threeSum([0, 0, 0, 0])); //[[0,0,0]]
console.log(threeSum([1, -1, -1, 0])); //[-1,0,1]
