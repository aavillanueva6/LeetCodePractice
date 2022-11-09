/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let seenR = new Set();
  let seenC = new Set();
  let seenS = new Set();
  //rows and columns
  for (let i = 0; i < 9; i++) {
    seenR.clear();
    seenC.clear();
    for (let j = 0; j < 9; j++) {
      if (!seenR.has(board[i][j])) {
        seenR.add(board[i][j]);
      } else if (board[i][j] * 1) {
        return false;
      }
      if (!seenC.has(board[j][i])) {
        seenC.add(board[j][i]);
      } else if (board[j][i] * 1) {
        return false;
      }
    }
  }

  //squares
  for (let i = 0; i < 9; i++) {
    seenS.clear();
    for (let j = Math.floor(i / 3) * 3; j < Math.floor(i / 3) * 3 + 3; j++) {
      for (let k = (i % 3) * 3; k < (i % 3) * 3 + 3; k++) {
        if (!seenS.has(board[j][k])) {
          seenS.add(board[j][k]);
        } else if (board[j][k] * 1) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
); // true
console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
); // false
