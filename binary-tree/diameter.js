var diameterOfBinaryTree = function (root) {
  let maxdiameter = 0;

  function dfs(root) {
    if (!root) return 0;

    let leftSubtree = dfs(root.left);
    let rightSubTree = dfs(root.right);
    let diameter = leftSubtree + rightSubTree;
    if (diameter > maxdiameter) maxdiameter = diameter;

    return 1 + Math.max(leftSubtree, rightSubTree);
  }
  dfs(root);
  return maxdiameter;
};
