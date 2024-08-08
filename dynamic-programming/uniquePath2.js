/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;
  const dp = Array.from({ length: m }, () => new Array(n).fill(-1));
  return uniquePath(m, n, m - 1, n - 1, dp, obstacleGrid);
};

function uniquePath(m, n, i, j, dp, obstacleGrid) {
  if (i === 0 && j === 0) return 1;
  if (i < 0 || j < 0) return 0;
  if (obstacleGrid[i][j] === 1) return 0;
  if (dp[i][j] !== -1) return dp[i][j];
  const top = uniquePath(m, n, i - 1, j, dp, obstacleGrid);
  const left = uniquePath(m, n, i, j - 1, dp, obstacleGrid);
  dp[i][j] = top + left;
  return dp[i][j];
}

function tabulation(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) break;
    dp[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) break;
    dp[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) continue;
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
