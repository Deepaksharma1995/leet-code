function deleteNode2(root, key) {
  if (root === null) return root;
  let rootCpy = root;

  let [findKey, parent] = search(root, key, null);
  if (findKey === null) return root;

  while (findKey !== null) {
    let temp = findKey;
    if (findKey.right !== null) {
      findKey.val = temp.right.val;
      findKey = temp.right;
    } else if (findKey.left !== null) {
      findKey.val = temp.left.val;
      findKey = temp.left;
    } else {
      if (parent) {
        if (parent.right === temp) parent.right = null;
        else parent.left = null;
      } else {
        return null;
      }
      findKey = null;
    }
    parent = temp;
  }

  return rootCpy;
}

function search(root, key, parent) {
  if (root === null) return [root, parent];
  if (root.val === key) return [root, parent];
  if (root.val > key) return search(root.left, key, root);
  if (root.val < key) return search(root.right, key, root);
}

function deleteNode(root, key) {
  if (root === null) return null;
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) return root.right;
    else if (!root.right) return root.left;

    let cur = root;
    while (cur.left) {
      cur = cur.left;
    }
    root.val = cur.val;
    root.right = deleteNode(cur.right, root.val);
  }
  return root;
}
