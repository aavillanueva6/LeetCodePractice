/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    let newVal = -1;
    for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++) {
      if (nums1[i] < nums2[j]) {
        newVal = nums2[j];
        break;
      }
    }
    ans.push(newVal);
  }
  return ans;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); //[-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); //[3,-1]
