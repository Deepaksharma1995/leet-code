function bottomView(root) {
  let ans = [];
  if (root === null) return ans;
  let map = new Map();
  let queue = [[root, 0]];
  let colsKey = [];

  while (queue.length !== 0) {
    let it = queue.shift();

    let node = it[0];
    let line = it[1];

    if (!map.has(line)) colsKey.push(line);
    map.set(line, node.data);

    if (node.left) queue.push(node.left, line - 1);
    if (node.right) queue.push(node.right, line + 1);
  }

  colsKey.sort((a, b) => a - b);

  for (let i = 0; i < colsKey.length; i++) {
    ans.push(map.get(colsKey[i]));
  }

  return ans;
}
