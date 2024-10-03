// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nPointer = 0;
  let cutoff = m;
  for (let i = 0; i < m + n; i++) {
    if (nums1[i] > nums2[nPointer] || cutoff <= i) {
      console.log(i, nPointer, cutoff);
      nums1.splice(i, 0, nums2[nPointer]);
      nums1.pop();
      nPointer++;
      cutoff++;
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //[1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); //[1]
console.log(merge([0], 0, [1], 1)); //[1]
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)); //[-1,0,0,1,2,2,3,3,3]
