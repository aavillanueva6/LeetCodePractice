/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let decoded = '';
  for (let i = 0; i < s.length; i++) {
    let code;
    if ((s[i] === '1' || s[i] === '2') && s[i + 2] === '#') {
      code = Number(s[i] + s[i + 1]) + 96;
      i += 2;
    } else {
      code = Number(s[i]) + 96;
    }
    decoded += String.fromCharCode(code);
  }
  return decoded;
};

console.log(freqAlphabets('10#11#12')); //"jkab"
console.log(freqAlphabets('1326#')); //"acz"
