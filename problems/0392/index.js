/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let count = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    let searchLetter = s[i];
    while (j < t.length) {
      if (searchLetter === t[j]) {
        count++;
        j++;
        break;
      } else {
        j++;
      }
    }
  }
  return count === s.length ? true : false;
};

console.log(isSubsequence('abc', 'ahbgdc')); //true
console.log(isSubsequence('axc', 'ahbgdc')); //false
