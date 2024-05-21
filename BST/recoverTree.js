function recoverTree(root) {
  let parent = [];

  function traverse(root, parent) {
    if (root === null) return;
    //traverse to the left
    traverse(root.left, parent);
    parent.push(root);
    //traverse to the right
    traverse(root.right, parent);
  }

  traverse(root, parent);

  let cpy = parent.map((data) => data.val);
  cpy.sort((a, b) => a - b);

  for (let i = 0; i < cpy.length; i++) {
    if (parent[i].val !== cpy[i]) {
      parent[i].val = cpy[i];
    }
  }

  return root;
}

function recoverTree2(root) {
  let first = null,
    middle = null,
    last = null,
    prev = new TreeNode(-Infinity);

  function inOrderTraverse(root) {
    if (root === null) return;

    inOrderTraverse(root.left);

    if (prev !== null && root.val < prev.val) {
      if (first === null) {
        first = prev;
        middle = root;
      } else {
        last = root;
      }
    }
    prev = root;
    inOrderTraverse(root.right);
  }

  inOrderTraverse(root);

  if (first && last) [first.val, last.val] = [last.val, first.val];
  else [first.val, middle.val] = [middle.val, first.val];

  return root;
}
