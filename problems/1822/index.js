/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let prod = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) return 0;
    prod *= nums[i];
  }
  return prod < 0 ? -1 : 1;
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])); //1
console.log(arraySign([1, 5, 0, 2, -3])); //0
console.log(arraySign([-1, 1, -1, 1, -1])); //-1
