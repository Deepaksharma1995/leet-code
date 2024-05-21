function verticalTraversal(root) {
  const nodeInfos = [];

  traverseNodes(root, 0, 0);

  nodeInfos.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

  const map = new Map();

  for (const [x, y, val] of nodeInfos) {
    if (!map.has(x)) map.set(x, []);
    map.get(x).push(val);
  }

  return [...map.values()];

  function traverseNodes(root, x, y) {
    if (root) {
      traverseNodes(root.left, x - 1, y - 1); //left traversal
      nodeInfos.push([x, y, root.val]);
      traverseNodes(root.right, x + 1, y - 1);
    }
  }
}
