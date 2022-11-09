/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b);
  let sum = 0;
  console.log(salary);
  for (let i = 1; i < salary.length - 1; i++) {
    sum += salary[i];
    console.log(sum);
  }
  return sum / (salary.length - 2);
};

console.log(average([4000, 3000, 1000, 2000])); //2500.00000
console.log(average([1000, 2000, 3000])); //2000.00000
