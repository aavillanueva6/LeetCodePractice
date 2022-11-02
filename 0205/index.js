var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  s = s.split('');
  t = t.split('');
  let sArr = [];
  let tArr = [];
  for (let i = 0; i < s.length; i++) {
    sArr[i] = s.indexOf(s[i]);
    tArr[i] = t.indexOf(t[i]);
  }
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) {
      return false;
    }
  }
  return true;
  console.log(Number(sArr.join('')));
  console.log(Number(tArr.join('')));
  return Number(sArr.join('')) === Number(tArr.join('')) ? true : false;
};
console.log(isIsomorphic('egg', 'add')); //true
console.log(isIsomorphic('foo', 'bar')); //false
console.log(isIsomorphic('paper', 'title')); //true
console.log(isIsomorphic('pape', 'title')); //false
console.log(isIsomorphic('bbbaaaba', 'aaabbbba')); //false
console.log(
  isIsomorphic('abcdefghijklmnopqrstuvwxyzva', 'abcdefghijklmnopqrstuvwxyzck')
); //false
