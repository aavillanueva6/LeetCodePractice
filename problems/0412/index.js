/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let ansArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        ansArr.push('FizzBuzz');
      } else {
        ansArr.push('Fizz');
      }
    } else if (i % 5 === 0) {
      ansArr.push('Buzz');
    } else {
      ansArr.push(i.toString());
    }
  }
  return ansArr;
};

console.log(fizzBuzz(3)); //["1","2","Fizz"]
console.log(fizzBuzz(5)); //["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); //["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
