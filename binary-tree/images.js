function isSymmetric(root) {
  if (root === null) return true;

  function compare(left, right) {
    if (left === null && right === null) return true;
    if (left === null && right !== null) return false;
    if (left !== null && right === null) return false;

    if (left.val !== right.val) return false;
    let leftT = compare(left.left, right.right);
    let rightT = compare(left.right, right.left);

    return leftT && rightT;
  }

  return compare(root.left, root.right);
}
