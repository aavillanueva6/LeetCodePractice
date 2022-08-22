/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  let sArr = s.split('');
  if (sArr.length <= k) {
    return s;
  }
  let groupArr = [];
  while (sArr.length > 0) {
    groupArr.push(sArr.splice(0, k));
  }
  for (let i = 0; i < groupArr.length; i++) {
    let num = 0;
    groupArr[i].forEach((element) => {
      num += Number(element);
    });
    groupArr[i] = num.toString();
  }
  let newString = groupArr.join('');
  return digitSum(newString, k);
};

console.log(digitSum('11111222223', 3)); //135

console.log(digitSum('00000000', 3)); //000
