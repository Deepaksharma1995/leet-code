/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => new Array(n).fill(Infinity));
  return minPathSumRecursion(m - 1, n - 1, grid, dp);
};

function minPathSumRecursion(i, j, grid, dp) {
  if (i === 0 && j === 0) return grid[0][0];
  if (i < 0 || j < 0) return Infinity;
  if (dp[i][j] !== Infinity) return dp[i][j];
  const left = minPathSumRecursion(i, j - 1, grid, dp);
  const top = minPathSumRecursion(i - 1, j, grid, dp);
  return (dp[i][j] = grid[i][j] + Math.min(left, top));
}

function tabulation(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
}

const x = tabulation([
  [1, 2, 3],
  [4, 5, 6],
]);

console.log(x);
