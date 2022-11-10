/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  if (nums.length === 1) return nums[0];
  let newNums = [];
  for (let i = 0; i < nums.length / 2; i++) {
    if (i % 2 === 0) {
      let newNum = Math.min(nums[i * 2], nums[i * 2 + 1]);
      newNums.push(newNum);
    } else {
      let newNum = Math.max(nums[i * 2], nums[i * 2 + 1]);
      newNums.push(newNum);
    }
  }
  return minMaxGame(newNums);
};

console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])); //1

console.log(minMaxGame([3])); //3
