// Given an m x n matrix, return all elements of the matrix in spiral order.

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let ansArr = [];
  let i = 0,
    j = 0,
    flag = 1;
  let totalEl = matrix.length * matrix[0].length;
  let seen = new Set();
  while (ansArr.length < totalEl) {
    ansArr.push(matrix[i][j]);
    seen.add(`${i},${j}`);
    if (flag === 1) {
      if (j < matrix[i].length - 1 && !seen.has(`${i},${j + 1}`)) {
        j++;
      } else {
        flag = 2;
        i++;
      }
    } else if (flag === 2) {
      if (i < matrix.length - 1 && !seen.has(`${i + 1},${j}`)) {
        i++;
      } else {
        flag = 3;
        j--;
      }
    } else if (flag === 3) {
      if (j > 0 && !seen.has(`${i},${j - 1}`)) {
        j--;
      } else {
        flag = 4;
        i--;
      }
    } else {
      if (i > 0 && !seen.has(`${i - 1},${j}`)) {
        i--;
      } else {
        flag = 1;
        j++;
      }
    }
  }
  return ansArr;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //[1,2,3,6,9,8,7,4,5]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); //[1,2,3,4,8,12,11,10,9,5,6,7]
