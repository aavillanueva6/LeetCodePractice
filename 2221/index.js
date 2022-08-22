/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  } else {
    let newNums = [];
    for (let i = 0; i < nums.length - 1; i++) {
      let newNum = (nums[i] + nums[i + 1]) % 10;
      newNums.push(newNum);
    }
    console.log(newNums);
    return triangularSum(newNums);
  }
};

// console.log(triangularSum([1, 2, 3, 4, 5])); //8

// console.log(triangularSum([5])); //5

console.log(
  triangularSum([2, 6, 6, 5, 5, 3, 3, 8, 6, 4, 3, 3, 5, 1, 0, 1, 3, 6, 9])
); //0
