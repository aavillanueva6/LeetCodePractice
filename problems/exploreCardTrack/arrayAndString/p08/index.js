// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let checkArr = [];
  if (needle.length > haystack.length) return -1;
  checkArr = ['', 0];
  for (let i = 0; i < haystack.length; i++) {
    if (!checkArr[0] && haystack[i] === needle[0]) {
      checkArr[0] = checkArr[0].concat(haystack[i]);
      checkArr[1] = i;
    } else if (haystack[i] === needle[checkArr[0].length]) {
      checkArr[0] = checkArr[0].concat(haystack[i]);
    } else if (checkArr[0]) {
      checkArr[0] = '';
      i = checkArr[1];
    }
    if (checkArr[0] === needle) return checkArr[1];
  }
  return -1;
};

console.log(strStr('sadbutsad', 'sad')); //0
console.log(strStr('leetcode', 'leeto')); //-1
console.log(strStr('soadbutsad', 'sad')); //7
console.log(strStr('mississippi', 'issip')); //4
