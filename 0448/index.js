/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let ansArr = [];
  for (let i = 1; i <= nums.length; i++) {
    if (nums.indexOf(i) === -1) {
      ansArr.push(i);
    }
  }
  return ansArr;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); //[5,6]
console.log(findDisappearedNumbers([1, 1])); //[2]
