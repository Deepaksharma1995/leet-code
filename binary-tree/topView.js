function topView(root) {
  let ans = [];
  if (root === null) return ans;
  let map = new Map(); // to store key(vertical line and value of the node first came)
  let queue = [[root, 0]]; //[[node,col]]
  let colKeys = [];

  while (queue.length !== 0) {
    let it = queue.shift();
    let node = it[0];
    let line = it[1];

    if (!map.has(line)) {
      map.set(line, node.val);
      colKeys.push(line);
    }

    if (node.left) queue.push([node.left, line - 1]);
    if (node.right) queue.push([node.right, line + 1]);
  }

  colKeys.sort((a, b) => a - b);

  for (let i = 0; i < colKeys.length; i++) {
    ans.push(map.get(colKeys[i]));
  }

  return ans;
}
