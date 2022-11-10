/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (true) {
    if (num < 10) return num;
    let numArr = num.toString().split('');
    num = 0;
    for (let i = 0; i < numArr.length; i++) {
      num += parseInt(numArr[i]);
    }
  }
};

console.log(addDigits(38)); //2
console.log(addDigits(0)); //0
