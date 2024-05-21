function buildTree(preorder, inorder) {
  let map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  let root = createTree(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1,
    map
  );

  return root;
}

function createTree(preorder, preStart, preEnd, inorder, inStart, inEnd, map) {
  if (preStart > preEnd || inStart > inEnd) return null;

  let root = new TreeNode(preorder[preStart]);
  let inRoot = map.get(root.val);
  let numsLeft = inRoot - inStart;

  root.left = createTree(
    preorder,
    preStart + 1,
    preStart + numsLeft,
    inorder,
    inStart,
    inRoot - 1,
    map
  );

  root.right = createTree(
    preorder,
    preStart + numsLeft + 1,
    preEnd,
    inorder,
    inRoot + 1,
    inEnd,
    map
  );

  return root;
}
