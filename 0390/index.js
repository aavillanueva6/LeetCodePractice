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
    console.log('eliminate: ', arr);
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
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i -= 2) {
      arr.splice(i, 1);
    }
    round++;
    return eliminate(arr);
  }
  return eliminate(arr);
};

// console.log(lastRemaining(9)); //6
// console.log(lastRemaining(1)); //1
// console.log(lastRemaining(2)); //2

console.log(lastRemaining(100000));

// console.log(lastRemaining(10000000)); // works but runtime is too long.  Need to figure out how to speed up the evenRound and oddRound functions
