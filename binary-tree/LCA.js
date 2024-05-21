function lowestCommonAncestor(root, p, q) {
  if (root.val === p || root.val === q || root === null) return root; //base condition if root is one of p and q

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left === null) return right;
  else if (right === null) return left;
  else return root;
}
