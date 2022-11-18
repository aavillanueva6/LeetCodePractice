/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0, j = mat[i].length - 1; i < mat.length; i++, j--) {
    sum += mat[i][i];
    if (i !== j) {
      sum += mat[i][j];
    }
  }
  return sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //25

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
); //8

console.log(diagonalSum([[5]])); //5
