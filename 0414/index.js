/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let ansArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === i) {
      ansArr.push(nums[i]);
    }
  }

  ansArr.sort((a, b) => a - b);
  return ansArr.length > 2
    ? ansArr[ansArr.length - 3]
    : ansArr[ansArr.length - 1];
};

console.log(thirdMax([3, 2, 1])); //1
console.log(thirdMax([2, 1])); //2
console.log(thirdMax([2, 2, 3, 1])); //1
