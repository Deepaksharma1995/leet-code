var minimumTotal = function (triangle) {
  return dfs(triangle, 0, 0);
};

function dfs(triangle, i, j) {
  if (i === triangle.length - 1) return triangle[i][j];
  if (j >= triangle[i].length) return Infinity;
  let bottom = dfs(triangle, i + 1, j) + triangle[i][j];
  let right = dfs(triangle, i + 1, j + 1) + triangle[i][j];
  let min = Math.min(bottom, right);
  return min;
}

const x = minimumTotal([[-1], [2, 3], [1, -1, -3]]);
console.log(x);
