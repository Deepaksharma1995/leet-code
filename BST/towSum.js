function findTarget(root, k) {
  let map = new Map();
  let found = false;

  function traversal(root) {
    if (!root) return;
    traversal(root.left);
    if (!map.has(root.val)) map.set(root.val, root.val);
    let val = map.get(root.val);
    map.delete(root.val);
    if (val && map.has(k - val)) {
      found = true;
    } else {
      map.set(val, val);
    }
    traversal(root.right);
  }

  traversal(root);
  return found;
}
