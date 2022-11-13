/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let seen = new Set();
  let ans = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (!seen.has(s[j])) {
        seen.add(s[j]);
        count++;
      } else {
        if (count > ans) {
          ans = count;
        }
        count = 0;
        seen.clear();
        break;
      }
    }
  }
  return Math.max(ans, count);
};

console.log(lengthOfLongestSubstring('abcabcbb')); //3
console.log(lengthOfLongestSubstring('bbbbb')); //1
console.log(lengthOfLongestSubstring('pwwkew')); //3
console.log(lengthOfLongestSubstring(' ')); //1
console.log(lengthOfLongestSubstring('aab')); //2
console.log(lengthOfLongestSubstring('dvdf')); //3
