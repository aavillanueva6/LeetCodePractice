/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let currentJumps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > currentJumps) {
      currentJumps = nums[i];
    }
    if (currentJumps === 0) return false;
    currentJumps--;
  }
  return true;
};

console.log(canJump([2, 3, 1, 1, 4])); //true
console.log(canJump([3, 2, 1, 0, 4])); //false
console.log(canJump([4, 2, 1, 0, 4])); //true
console.log(canJump([4, 2, 1, 0, 0])); //true
console.log(canJump([4, 2, 1, 0, 0, 4])); //false
console.log(canJump([3, 0, 0, 0])); //true
console.log(canJump([0, 0, 0])); //false
