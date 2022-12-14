var moveZeroes = function (nums) {
  let arrIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[arrIndex] = nums[i];
      arrIndex++;
    }
  }
  for (i = arrIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); //[1,3,12,0,0]
console.log(moveZeroes([0])); //[0]
