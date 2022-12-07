/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let newS = '';
  let newT = '';

  for (let i = 0; i < s.length || i < t.length; i++) {
    if (s[i] == '#') {
      newS = newS.replace(/.$/, '');
    } else if (s[i]) {
      newS += s[i];
    }
    if (t[i] === '#') {
      newT = newT.replace(/.$/, '');
    } else if (t[i]) {
      newT += t[i];
    }
  }
  console.log(newS, newT);
  return newT === newS ? true : false;
};

console.log(backspaceCompare('ab#c', 'ad#c')); //true
console.log(backspaceCompare('ab##', 'c#d#')); //true
console.log(backspaceCompare('a#c', 'b')); //false
console.log(backspaceCompare('xywrrmp', 'xywrrmu#p')); //true
