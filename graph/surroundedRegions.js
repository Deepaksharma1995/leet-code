var solve = function (board) {
  const n = board.length;
  const m = board[0].length;
  const vis = new Array(n).fill(0).map(() => new Array(m).fill(0));

  //traverse fisrt row and last row
  for (let j = 0; j < m; j++) {
    //first row
    if (vis[0][j] === 0 && board[0][j] === "O") {
      dfs(0, j, vis, board, n, m);
    }

    console.log("jhsd", n - 1, j, board[n - 1][j]);

    //last row
    if (vis[n - 1][j] === 0 && board[n - 1][j] === "O") {
      dfs(n - 1, j, vis, board, n, m);
    }
  }

  for (let i = 0; i < n; i++) {
    //first column
    if (vis[i][0] === 0 && board[i][0] === "O") {
      dfs(i, 0, vis, board, n, m);
    }

    //last column
    if (vis[i][m - 1] === 0 && board[i][m - 1] === "O") {
      dfs(i, m - 1, vis, board, n, m);
    }
  }

  console.log("d", vis);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "O" && !vis[i][j]) {
        board[i][j] = "X";
      }
    }
  }

  return board;
};

const delRow = [-1, 0, 1, 0];
const delCol = [0, 1, 0, -1];

function dfs(row, col, vis, board, n, m) {
  console.log(row, col);
  vis[row][col] = 1;

  for (let i = 0; i < 4; i++) {
    const nrow = row + delRow[i];
    const ncol = col + delCol[i];

    if (
      nrow < n &&
      nrow >= 0 &&
      ncol >= 0 &&
      ncol < m &&
      vis[nrow][ncol] === 0 &&
      board[nrow][ncol] === "O"
    ) {
      dfs(nrow, ncol, vis, board, n, m);
    }
  }
}

const res = solve([
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
]);

console.log(res);
