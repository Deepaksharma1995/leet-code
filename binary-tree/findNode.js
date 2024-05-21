function getPath(root, x) {
  let res = false;
  let arr = [];
  res = travserse(root, arr, x);

  function travserse(root, arr, x) {
    if (root === null) return false;

    arr.push(root.val);

    if (root.val === x) return true;

    if (getPath(root.left, arr, x) || getPath(root.right, arr, x)) return true;

    arr.pop();
    return false;
  }
}
