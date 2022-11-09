/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let prod = 1;
  let sum = 0;
  n.toString()
    .split('')
    .forEach((element) => {
      (prod *= element), (sum += 1 * element);
    });
  return prod - sum;
};

console.log(subtractProductAndSum(234)); //15
console.log(subtractProductAndSum(4421)); //21
