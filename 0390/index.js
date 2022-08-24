/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  let round = 0;
  if (n === 1) return 1;
  let arr = [];
  for (let i = 2; i <= n; i += 2) {
    arr.push(i);
  }
  function eliminate(arr) {
    if (arr.length === 1) return arr[0];
    if (round % 2 !== 0) {
      return oddRound(arr);
    } else {
      return evenRound(arr);
    }
  }
  function oddRound(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i += 2) {
      newArr.push(arr[i]);
    }
    round++;
    return eliminate(newArr);
  }
  function evenRound(arr) {
    if (arr.length % 2 === 0) {
      return evenRoundEvenLength(arr);
    } else {
      return evenRoundOddLength(arr);
    }
  }
  function evenRoundEvenLength(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 2) {
      newArr.push(arr[i]);
    }
    round++;
    return eliminate(newArr);
  }
  function evenRoundOddLength(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i += 2) {
      newArr.push(arr[i]);
    }
    round++;
    return eliminate(newArr);
  }
  return eliminate(arr);
};

// console.log(lastRemaining(9)); //6
// console.log(lastRemaining(1)); //1
// console.log(lastRemaining(2)); //2

console.log(lastRemaining(1000000));

console.log(lastRemaining(100000000)); // runtime has been fixed, but now having memory allocation issues
