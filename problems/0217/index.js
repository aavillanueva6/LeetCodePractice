/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!seen.has(nums[i])) seen.add(nums[i]);
    else return true;
  }
  return false;

  //original solution below
  /*
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(nums[i]) !== i) {
      return true;
    }
  }
  return false;
  */
};
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
