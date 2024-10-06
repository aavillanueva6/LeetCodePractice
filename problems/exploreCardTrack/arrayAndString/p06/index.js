// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Constraints:

// 1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let ans = [[1]],
    temp = [];
  if (numRows === 1) return ans;
  for (let i = 1; i < numRows; i++) {
    temp = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        temp.push(1);
      } else {
        temp.push(ans[i - 1][j - 1] + ans[i - 1][j]);
      }
    }
    ans.push(temp);
  }
  return ans;
};

console.log(generate(1)); //[[1]]

console.log(generate(5)); //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
