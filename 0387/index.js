/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar('leetcode')); //0
console.log(firstUniqChar('loveleetcode')); //2
console.log(firstUniqChar('aabb')); //-1

//this is a pretty brute force-y algo.  I could probably come up with a more efficient way to do it using a hashmap.
