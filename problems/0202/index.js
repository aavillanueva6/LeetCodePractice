/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let nArr = [];
  while (n !== 1) {
    if (n === 4) {
      break;
    }
    nArr = n.toString().split('');
    newNArr = nArr.map((elem) => {
      return elem * elem;
    });
    n = 0;
    for (let i = 0; i < newNArr.length; i++) {
      n += newNArr[i];
    }
  }
  return n === 1 ? true : false;
};
console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
