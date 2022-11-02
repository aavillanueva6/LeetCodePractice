var reverseStr = function (s, k) {
  s = s.split('');
  for (let i = 0, j = k - 1; i < s.length; i += 2 * k, j += 2 * k) {
    let subArr = [];
    for (let m = i; m <= j; m++) {
      subArr.push(s[m]);
    }
    subArr.reverse();
    for (let m = 0; m < k; m++) {
      s[m + i] = subArr[m];
    }
  }
  return s.join('');
};

console.log(reverseStr('abcdefg', 2)); //"bacdfeg"
console.log(reverseStr('abcd', 2)); //"bacd"
