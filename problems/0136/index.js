/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let searchNum = nums[i];
    nums[i] = searchNum - 1;
    if (nums.indexOf(searchNum) === -1) return searchNum;
    nums[i] = searchNum;
  }
};

console.log(singleNumber([2, 2, 1])); //1
console.log(singleNumber([4, 1, 2, 1, 2])); //4
console.log(singleNumber([1])); //1
