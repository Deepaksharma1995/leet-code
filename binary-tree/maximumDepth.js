function maxDepth(root) {
  function traverse(root, currentHieght) {
    if (!root) return;

    let left = traverse(root.left, currentHieght);
    let right = traverse(root.right, currentHieght);

    return left > right ? left + 1 : right + 1;
  }

  return traverse(root, 0);
}
