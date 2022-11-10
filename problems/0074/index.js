/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  function rowSearch(low, high, row) {
    if (low > high) return false;
    else {
      let mid = Math.floor((low + high) / 2);
      if (row[mid] === target) return true;
      else if (row[mid] < target) return rowSearch(mid + 1, high, row);
      else return rowSearch(low, mid - 1, row);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][matrix[i].length - 1] === target) return true;
    else if (matrix[i][matrix[i].length - 1] < target) continue;
    else return rowSearch(0, matrix[i].length - 2, matrix[i]);
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
); //true

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
); //false

console.log(searchMatrix([[1]], 2)); //false
