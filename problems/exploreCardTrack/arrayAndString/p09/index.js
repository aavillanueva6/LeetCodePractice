// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let ans = '';
  for (let i = 0; i < strs[0].length; i++) {
    ans = ans.concat(strs[0][i]);
  }
  for (let i = 1; i < strs.length; i++) {
    if (strs[i] === '') return '';
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] !== ans[j]) {
        ans = ans.slice(0, j);
        break;
      } else if (j === strs[i].length - 1) {
        ans = ans.slice(0, j + 1);
        break;
      }
    }
  }
  return ans;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); //'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); //''
console.log(longestCommonPrefix(['ab', 'a'])); //'a'
console.log(longestCommonPrefix(['abab', 'aba', ''])); //''
