/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxValue = 0;

  for (let i = 0; i < accounts.length; i++) {
    let current = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      current += accounts[i][j];
    }
    if (current > maxValue) maxValue = current;
  }
  return maxValue;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
); //6
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
); //10
console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
); //17
