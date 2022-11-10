/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sObj = {};
  s.split('').forEach((letter) => {
    if (sObj[letter]) {
      sObj[letter]++;
    } else {
      sObj[letter] = 1;
    }
  });
  let tObj = {};
  t.split('').forEach((letter) => {
    if (tObj[letter]) {
      tObj[letter]++;
    } else {
      tObj[letter] = 1;
    }
  });

  for (let letter in tObj) {
    if (sObj[letter] !== tObj[letter]) return letter;
  }
};

console.log(findTheDifference('abcd', 'abcde')); //"e"

console.log(findTheDifference('', 'y')); //"y"
