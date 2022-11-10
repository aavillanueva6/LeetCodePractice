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
    return newArr;
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
    return newArr;
  }
  function evenRoundOddLength(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i += 2) {
      newArr.push(arr[i]);
    }
    round++;
    return newArr;
  }
  while (arr.length > 1) {
    arr = eliminate(arr);
  }
  return arr[0];
};

// console.log(lastRemaining(9)); //6
// console.log(lastRemaining(1)); //1
// console.log(lastRemaining(2)); //2

// console.log(lastRemaining(1000000));

console.log(lastRemaining(100000000)); // this is the one causing it to crash on leetcode
