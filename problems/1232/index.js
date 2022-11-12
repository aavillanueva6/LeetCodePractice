/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length === 2) return true;
  coordinates.sort((a, b) => a[0] - b[0]);
  let slope =
    (coordinates[0][0] - coordinates[1][0]) /
    (coordinates[0][1] - coordinates[1][1]);
  for (let i = 1; i < coordinates.length - 1; i++) {
    if (
      (coordinates[i][0] - coordinates[i + 1][0]) /
        (coordinates[i][1] - coordinates[i + 1][1]) !==
      slope
    )
      return false;
  }
  return true;
};

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
); //true
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
); //false

console.log(
  checkStraightLine([
    [-3, -2],
    [-1, -2],
    [2, -2],
    [-2, -2],
    [0, -2],
  ])
); //true
