/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  function binarySearch(array, goal, low, high) {
    if (low > high) return -1;
    else {
      let mid = Math.floor((low + high) / 2);
      if (goal === mid) return array.indexOf(goal);
      else if (goal > mid) return binarySearch(array, goal, mid + 1, high);
      else return binarySearch(array, goal, low, mid - 1);
    }
  }
  return binarySearch(nums, target, nums[0], nums[nums.length - 1]);
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
