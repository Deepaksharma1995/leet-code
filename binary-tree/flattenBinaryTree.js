function flatten(root) {
  var result = [];

  function preOrder(root, result) {
    if (root == null) return result;
    result.push(root);
    preOrder(root.left, result);
    preOrder(root.right, result);
  }

  preOrder(root, result);

  let res = result[0];

  for (let i = 0; i < result.length - 1; i++) {
    result[i].left = null;
    result[i].right = result[i + 1];
  }

  return res;
}
