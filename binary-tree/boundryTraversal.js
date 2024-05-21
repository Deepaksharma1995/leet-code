function boundryTraversal(root) {
  let res = [];
  if (isLeaf(root)) res.push(root.val);
  leftTraversal(root, res);
  leafInorderTraversal(root, res);
  rightTraversal(root, res);

  return res;
}

//traverse left
function leftTraversal(root, res) {
  let cur = root.left;
  while (cur !== null) {
    if (!isLeaf(cur)) res.push(cur.val);
    if (cur.left !== null) cur = cur.left;
    else cur = cur.right;
  }
}

//travserse right
function rightTraversal(root, res) {
  let cur = root.right;
  let temp = [];

  while (cur !== null) {
    if (isLeaf(cur) == false) temp.push(cur.val);
    if (cur.right !== null) cur = cur.right;
    else cur = cur.left;
  }

  for (let i = temp.length - 1; i >= 0; i--) {
    res.push(temp[i]);
  }
}

//add leaf nodes
function leafInorderTraversal(root, res) {
  let arr = [];
  if (isLeaf(root)) {
    res.push(root.val);
    return;
  }
  if (root.left !== null) leafInorderTraversal(root.left, res);
  if (root.right !== null) leafInorderTraversal(root.right, res);
}

function isLeaf(root) {
  return root.left == null && root.right == null;
}
