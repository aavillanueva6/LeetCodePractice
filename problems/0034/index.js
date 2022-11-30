/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function recursiveSearch(arr, start, end, target) {
  if (start > end) return [-1, -1];
  let mid = Math.floor((end + start) / 2);
  if (arr[mid] === target) {
    return [firstIndex(arr, mid, target), lastIndex(arr, mid, target)];
  }
  return arr[mid] > target
    ? recursiveSearch(arr, start, mid - 1, target)
    : recursiveSearch(arr, mid + 1, end, target);
}
function firstIndex(arr, mid, target) {
  return arr[mid - 1] === target ? firstIndex(arr, mid - 1, target) : mid;
}

function lastIndex(arr, mid, target) {
  return arr[mid + 1] === target ? lastIndex(arr, mid + 1, target) : mid;
}

var searchRange = function (nums, target) {
  return nums.length === 0
    ? [-1, -1]
    : recursiveSearch(nums, 0, nums.length - 1, target);
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); //[3,4]
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); //[-1,-1]
// console.log(searchRange([], 4)); //[-1,-1]
console.log(searchRange([2, 2], 2)); //[0,1]
