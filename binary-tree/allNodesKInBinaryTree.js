function distanceK(root, target, k) {
  if (root === null) return [];
  const node = findTarget(root, null, target);
  const ans = [];
  return findAllKApart(node, k, ans);
}

function findTarget(root, parent, target) {
  if (!root) return null;
  root.parent = parent;
  if (root === target) return root;

  return (
    findTarget(root.left, root, target) || findTarget(root.right, root, target)
  );
}

function findAllKApart(root, k, ans) {
  if (!root || root.visited) return ans;
  if (k === 0) {
    ans.push(root);
    return ans;
  }
  root.visited = true;
  findAllKApart(root.left, k - 1, ans);
  findAllKApart(root.right, k - 1, ans);
  findAllKApart(root.parent, k - 1, ans);
}
