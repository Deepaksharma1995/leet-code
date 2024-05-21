var maxPathSum = function (root) {
  if (!root) return 0;
  let maxSum = -Infinity;

  function dfs(root) {
    if (root === null) return 0;

    let leftSum = dfs(root.left);
    let rightSum = dfs(root.right);

    let sum = root.val + leftSum + rightSum;
    if (sum > maxSum) maxSum = sum;

    return Math.max(leftSum, rightSum) + root;
  }

  dfs(root);

  return maxSum;
};
