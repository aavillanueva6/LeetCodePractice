/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  while (k > nums.length) k -= nums.length;
  let subArr = nums.splice(0, nums.length - k);
  subArr.forEach((element) => {
    nums.push(element);
  });
  return nums;
  /*
  // first attempt.  This passed 37/38 test cases but failed due to exceeding time limit when k=54944
  for (let i = 0; i < k; i++) {
    nums.splice(0, 0, nums[nums.length - 1]);
    nums.pop();
  }
  return nums;
  */
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); //[5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); //[3,99,-1,-100]
console.log(rotate([1, 2], 5)); //[2,1]
