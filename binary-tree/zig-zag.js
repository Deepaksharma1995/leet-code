var zigzagLevelOrder = function (root) {
  let soln = [];

  //traversal function
  function bfs(rootArr, isLeft) {
    if (rootArr.length === 0) return;
    let queue = [];
    let vals = [];

    if (isLeft) {
      rootArr.forEach((data) => {
        if (data?.val !== null) vals.push(data?.val);
        if (data?.left) {
          queue.push(data?.left);
        }
        if (data?.right) {
          queue.push(data?.right);
        }
      });
    } else {
      for (let i = rootArr.length - 1; i >= 0; i--) {
        if (rootArr[i]?.val !== null) vals.push(rootArr[i]?.val);
        if (rootArr[i]?.left) queue.push(rootArr[i]?.left);
        if (rootArr[i]?.right) queue.push(rootArr[i]?.right);
      }
    }
    vals.length && soln.push(vals);
    return bfs(queue, !isLeft);
  }

  bfs([root], true);
  return soln;
};
