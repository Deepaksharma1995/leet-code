/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // const dp = new Array(m).fill(new Array(n).fill(-1));
  const dp = Array.from({ length: m }, () => new Array(n).fill(-1));
  //cant use new Array(m).fill(new Array(n).fill(-1));
  // becuase it will give error because new Array(n).fill(-1)
  // creates an array of length n with all values -1
  // which will get referenced to all the values on m.
  //never use it for 2d array.

  let x = findPath(m, n, m - 1, n - 1, dp);
  console.log("", dp);
  return x;
};

function findPath(m, n, i, j, dp) {
  if (i === 0 && j === 0) return 1;
  if (i < 0 || j < 0) return 0;
  if (dp[i][j] !== -1) return dp[i][j];
  let bottom = findPath(m, n, i - 1, j, dp);
  let right = findPath(m, n, i, j - 1, dp);
  return (dp[i][j] = bottom + right);
}

function tabulation(m, n) {
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

// const x = uniquePaths(3, 7);
const y = tabulation(3, 3);
console.log("", y);
// console.log("", x);
