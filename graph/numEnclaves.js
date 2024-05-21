var numEnclaves = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const vis = new Array(n).fill(0).map(() => new Array(m).fill(0));

  const delRow = [-1, 0, 1, 0];
  const delCol = [0, 1, 0, -1];

  //four directional in boundraies

  for (let i = 0; i < n; i++) {
    //first col
    if (!vis[i][0] && grid[i][0] === 1) {
      dfs(i, 0, vis, board);
    }

    //last col
    if (!vis[i][m - 1] && grid[i][m - 1] === 1) {
      dfs(i, m - 1, vis, board);
    }
  }

  for (let j = 0; j < m; j++) {
    //first row
    if (!vis[0][j] && grid[0][j] === 1) {
      dfs(0, j, vis, board);
    }

    //last row
    if (!vis[n - 1][j] && grid[n - 1][j] === 1) {
      dfs(n - 1, j, vis, board);
    }
  }

  function dfs(row, col, vis, grid) {
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
        grid[nrow][ncol] === 1
      ) {
        dfs(nrow, ncol, vis, board, n, m);
      }
    }
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!vis[i][j] && grid[i][j] === 1) {
        count++;
      }
    }
  }

  return count;
};
