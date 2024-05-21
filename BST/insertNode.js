function insertIntoBST(root, val) {
  let rootCpy = root;
  let newNode = new TreeNode(val, null, null);
  if (root === null) return newNode;
  let temp = root;

  while (root !== null) {
    if (root.val < newNode.val) {
      temp = root;
      newNode.left = temp.left;
      newNode.right = temp.right;
      root = newNode;
      newNode = temp;
      newNode.left = null;
      newNode.right = null;
    }
    root = root.left;
  }

  return rootCpy;
}
