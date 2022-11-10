/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let ans = [[1]];
  if (rowIndex === 0) return ans[rowIndex];
  ans.push([1, 1]);
  if (rowIndex === 1) return ans[rowIndex];
  for (let i = 3; i <= rowIndex + 1; i++) {
    let prevRow = ans[i - 2];
    let newRow = [];
    for (let j = 1; j < i - 1; j++) {
      newRow[j] = prevRow[j - 1] + prevRow[j];
    }
    newRow[0] = 1;
    newRow.push(1);
    ans.push(newRow);
  }
  return ans[rowIndex];
};

console.log(getRow(4)); //[1,4,6,4,1]

console.log(getRow(0)); //[[1]]
