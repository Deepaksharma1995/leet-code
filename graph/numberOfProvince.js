function findCircleNum(isConnected) {
  let adjL = new Array(isConnected.length).fill([]);
  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] === 1 && i != j) {
        adjL[i].push(j);
        adjL[j].push(i);
      }
    }
  }

  console.log("this is list", adjL, isConnected);

  let vis = new Array(adjL.length).fill(false);
  let count = 0;

  for (let i = 0; i < vis.length; i++) {
    if (!vis[i]) {
      count++;
      dfs(i, vis, adjL);
    }
  }
  return count;
}

function dfs(node, vis, adjL) {
  vis[node] = true;

  for (let it of adjL[node]) {
    if (!vis[it]) {
      dfs(it, vis, adjL);
    }
  }
}

findCircleNum2([
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);

function findCircleNum2(M) {
  const visted = new Set();
  let count = 0;

  for (let i = 0; i < M.length; i++) {
    if (!visted.has(i)) {
      dfs(i);
      count++;
    }
  }

  console.log(x, visted);
  return count;

  function dfs(i) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] === 1 && !visted.has(j)) {
        visted.add(j);
        dfs(j);
      }
    }
  }
}
