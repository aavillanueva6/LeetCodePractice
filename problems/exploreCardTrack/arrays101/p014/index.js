// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;
  let count = nums.length;
  while (left < nums.length) {
    if (nums[left] !== val) {
      left++;
    } else {
      nums[left] = nums[right];
      right--;
      count--;
      nums.pop();
    }
  }
  console.log(nums);
  return count;
  // let writePointer = -1;
  // let valSeen = false;
  // let k = nums.length;
  // for (let i = 0; i < nums.length; i++) {
  //   if (valSeen && nums[i] !== val) {
  //     nums[writePointer] = nums[i];
  //     writePointer++;
  //   }
  //   if (nums[i] === val && !valSeen) {
  //     valSeen = true;
  //     writePointer = i;
  //   }
  //   if (nums[i] === val) k--;
  //   // if (nums[i] === val && writePointer === -1) writePointer = i;

  //   // console.log(writePointer);
  // }
  // console.log(nums);
  // return k;
};

console.log(removeElement([3, 2, 2, 3], 3)); //2, nums = [2,2,_,_]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //5, nums = [0,1,4,0,3,_,_,_]
