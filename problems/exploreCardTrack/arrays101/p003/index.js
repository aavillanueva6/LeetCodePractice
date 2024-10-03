// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let ansArr = [];
  let lowPointer = 0;
  let highPointer = nums.length - 1;
  let lowSquare = nums[lowPointer] * nums[lowPointer];
  let highSquare = nums[highPointer] * nums[highPointer];
  for (let i = highPointer; i >= 0; i--) {
    if (lowSquare < highSquare) {
      ansArr[i] = highSquare;
      highPointer--;
      highSquare = nums[highPointer] * nums[highPointer];
    } else {
      ansArr[i] = lowSquare;
      lowPointer++;
      lowSquare = nums[lowPointer] * nums[lowPointer];
    }
  }
  return ansArr;
  /*
  // initial solution (square and then sort)

  for(let i=0;i<nums.length;i++){
      nums[i]*=nums[i]
  }
  return nums.sort((a,b)=>a-b)
  */
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); //[0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); //[4,9,9,49,121]
