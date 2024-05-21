function solveNQueens(n) {
  const result = [];

  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (
        board[i] === col ||
        board[i] - i === col - row ||
        board[i] + i === col + row
      ) {
        return false;
      }
    }
    return true;
  }

  function placeQueens(row, board) {
    if (row === n) {
      result.push([...board]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row] = col;
        placeQueens(row + 1, board);
        board[row] = undefined;
      }
    }
  }

  const board = Array(n).fill(undefined);
  placeQueens(0, board);
  let solution = [];

  for (let i = 0; i < result.length; i++) {
    solution[i] = [];
    for (let j = 0; j < n; j++) {
      solution[i].push(Array(n).fill(".").join(""));
      solution[i][j] =
        solution[i][j].substring(0, result[i][j]) +
        "Q" +
        solution[i][j].substring(result[i][j] + 1);
    }
  }
  //console.log(solution);
  return solution;
}

console.log(solveNQueens(4));
