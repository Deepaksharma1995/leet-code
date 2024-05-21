function lowestCommonAncestor(root, p, q) {
  if (root === null || root.val === p.val || root.val === q.val) return root; //base condition if root is one of p and q

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left === null) return right;
  else if (right === null) return left;
  else return root;
}
