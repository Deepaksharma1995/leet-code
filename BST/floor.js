function floor(root, key) {
  if (root == null) return null;

  let floor = -1;

  while (root) {
    if (root.val === key) {
      floor = key;
      return floor;
    }

    if (key > root.val) {
      floor = root.val;
      root = root.left;
    } else {
      root = root.right;
    }
  }

  return floor;
}
