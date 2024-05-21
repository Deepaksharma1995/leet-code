var rightSideView = function (root) {
  let ans = [];
  if (root === null) return ans;
  let map = new Map();
  let queue = [[root, 0]];
  let rowsKey = [];

  while (queue.length !== 0) {
    let it = queue.shift();

    let node = it[0];
    let hLine = it[1];

    if (!map.has(hLine)) rowsKey.push(hLine);
    map.set(hLine, node.val);

    if (node.left) queue.push([node.left, hLine + 1]);
    if (node.right) queue.push([node.right, hLine + 1]);
  }

  rowsKey.sort((a, b) => a - b);

  for (let i = 0; i < rowsKey.length; i++) {
    ans.push(map.get(rowsKey[i]));
  }

  return ans;
};
