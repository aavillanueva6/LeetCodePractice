/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let hashMap = new Map();
  for (let i = 0; i < s1.length; i++) {
    if (!hashMap.has(s1[i])) hashMap.set(s1[i], 1);
    else hashMap.set(s1[i], hashMap.get(s1[i]) + 1);
  }
  for (let i = 0; i < s2.length; i++) {
    let temp = new Map();
    hashMap.forEach((value, key) => {
      temp.set(key, value);
    });
    if (temp.has(s2[i])) {
      temp.set(s2[i], temp.get(s2[i]) - 1);
      if (temp.get(s2[i]) === 0) temp.delete(s2[i]);
      for (let j = i + 1; j < s2.length; j++) {
        if (!temp.has(s2[j])) break;
        temp.set(s2[j], temp.get(s2[j]) - 1);
        if (temp.get(s2[j]) === 0) temp.delete(s2[j]);
        if (temp.size === 0) return true;
      }
    }
  }
  return false;
};

console.log(checkInclusion('ab', 'eidbaooo')); //true
console.log(checkInclusion('ab', 'eidboaoo')); //false
