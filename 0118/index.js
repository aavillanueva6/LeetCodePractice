/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let ans = [[1]];
  if (numRows === 1) return ans;
  ans = [[1], [1, 1]];
  if (numRows === 2) return ans;
  for (let i = 3; i <= numRows; i++) {
    let prevRow = ans[i - 2];
    // console.log(prevRow);
    let newRow = [];
    for (let j = 1; j < i - 1; j++) {
      newRow[j] = prevRow[j - 1] + prevRow[j];
    }
    newRow[0] = 1;
    newRow.push(1);
    ans.push(newRow);
  }
  return ans;
};

console.log(generate(5)); //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

console.log(generate(1)); //[[1]]
