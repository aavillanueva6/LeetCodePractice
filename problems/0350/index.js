/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let ansArr = [];
  if (nums1.length < nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.indexOf(nums1[i]) !== -1) {
        ansArr.push(nums1[i]);
        nums2.splice(nums2.indexOf(nums1[i]), 1);
      }
    }
  } else {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.indexOf(nums2[i]) !== -1) {
        ansArr.push(nums2[i]);
        nums1.splice(nums1.indexOf(nums2[i]), 1);
      }
    }
  }
  return ansArr;

  // let nums1Map = new Map();
  // let nums2Map = new Map();
  // let ansArr = [];
  // for (let i = 0, j = 0; i < nums1.length || j < nums2.length; i++, j++) {
  //   if (!nums1Map[nums1[i]]) {
  //     nums1Map[nums1[i]] = 1;
  //   } else {
  //     nums1Map[nums1[i]]++;
  //   }
  //   if (!nums2Map[nums2[j]]) {
  //     nums2Map[nums2[j]] = 1;
  //   } else {
  //     nums2Map[nums2[j]]++;
  //   }
  // }
  // console.log(nums1Map, nums2Map);

  // console.log(nums2Map.keys());

  // nums2Map.forEach((value, key) => {
  //   console.log(value, key);
  //   if (nums2Map.has(key)) {
  //     console.log(value, nums2Map.get(key));
  //   }
  // });
};

console.log(intersect([1, 2, 2, 1], [2, 2])); //[2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); //[4,9]
console.log(intersect([4, 7, 9, 7, 6, 7], [5, 0, 0, 6, 1, 6, 2, 2, 4])); //[4,6]
