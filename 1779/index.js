/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let ans = -1;
  let dist = Number.MAX_VALUE;
  for (let i = 0; i < points.length; i++) {
    if (
      (x === points[i][0] || y === points[i][1]) &&
      dist > Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])
    ) {
      dist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
      ans = i;
    }
  }
  return ans;
};

console.log(
  nearestValidPoint(3, 4, [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ])
); //2

console.log(nearestValidPoint(3, 4, [[3, 4]])); //0
console.log(nearestValidPoint(3, 4, [[2, 3]])); //-1
