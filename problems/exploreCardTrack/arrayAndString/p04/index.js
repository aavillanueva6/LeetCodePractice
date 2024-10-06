// Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// -105 <= mat[i][j] <= 105

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let ansArr = [];
  let end = false;
  let i = 0;
  let j = 0;
  let flag = 2;
  while (!end) {
    ansArr.push(mat[i][j]);
    if (i === mat.length - 1 && j === mat[0].length - 1) break;
    if (flag === 1) {
      if ((j === 0 && i === mat.length - 1) || i === mat.length - 1) {
        flag = 2;
        j++;
      } else if (j === 0) {
        flag = 2;
        i++;
      } else {
        i++;
        j--;
      }
    } else if (flag === 2) {
      if ((i === 0 && j === mat[0].length - 1) || j === mat[0].length - 1) {
        flag = 1;
        i++;
      } else if (i === 0) {
        flag = 1;
        j++;
      } else {
        i--;
        j++;
      }
    }
  }
  return ansArr;
};

console.log(findDiagonalOrder([[2, 3]])); //[2,3]
console.log(findDiagonalOrder([[3], [2]])); //[3,2]
console.log(findDiagonalOrder([[1]])); //[1]
console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //[1,2,4,7,5,3,6,8,9]
console.log(
  findDiagonalOrder([
    [1, 2],
    [3, 4],
  ])
); //[1,2,3,4]
console.log(
  findDiagonalOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
); //[1,2,6,11,7,3,4,8,12,16,21,17,13,9,5,10,14,18,22,23,19,15,20,24,25]
