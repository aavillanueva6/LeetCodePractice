/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      arr.push('FizzBuzz');
    } else if ((i + 1) % 3 === 0) {
      arr.push('Fizz');
    } else if ((i + 1) % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push((i + 1).toString());
    }
  }
  return arr;
};

console.log(fizzBuzz(3)); //["1","2","Fizz"]
console.log(fizzBuzz(5)); //["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); //["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// // prior solution
// var fizzBuzz = function (n) {
//   let ansArr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0) {
//       if (i % 5 === 0) {
//         ansArr.push('FizzBuzz');
//       } else {
//         ansArr.push('Fizz');
//       }
//     } else if (i % 5 === 0) {
//       ansArr.push('Buzz');
//     } else {
//       ansArr.push(i.toString());
//     }
//   }
//   return ansArr;
// };
