/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) return mat;
  let combinedMat = [];
  let reshaped = [];
  for (let i = 0; i < mat.length; i++) {
    combinedMat = combinedMat.concat(mat[i]);
  }
  for (let i = 0; i < r; i++) {
    let subArr = [];
    for (let j = 0; j < c; j++) {
      subArr.push(combinedMat[i * c + j]);
    }
    reshaped.push(subArr);
  }

  return reshaped;
};
console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
); //[[1,2,3,4]]
console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4
  )
); //[[1,2],[3,4]]
console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    4,
    1
  )
); //[[1],[2],[3],[4]]
console.log(matrixReshape([[1, 2, 3, 4]], 2, 2)); //[[1,2],[3,4]]
