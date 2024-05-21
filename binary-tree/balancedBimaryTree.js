function isBalanced(root) {
  if (root == null) return true;
  if (Height(root) === -1) return false;
  return true;

  function Height(root) {
    if (root === null) return 0;
    let leftSubtree = Height(root.left);
    let rightSubTree = Height(root.right);

    if (leftSubtree === -1 || rightSubTree === -1) return -1;
    if (Math.abs(leftSubtree - rightSubTree) > 1) return -1;

    return Math.max(leftSubtree, rightSubTree) + 1;
  }
}
