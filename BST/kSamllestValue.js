function kthSmallest(root, k) {
  let vals = [];

  function search(root) {
    if (root === null) return;
    if (root.val) vals.push(root.val);
    search(root.left);
    search(root.right);
  }

  search(root);
  vals.sort((a, b) => a - b);
  return vals[k - 1];
}
