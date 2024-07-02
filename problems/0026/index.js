/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log(nums);
  return k;
};
console.log(removeDuplicates((nums = [1, 1, 2]))); //2, nums = [1,2,_]
console.log(removeDuplicates((nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))); //5, nums = [0,1,2,3,4,_,_,_,_,_]
