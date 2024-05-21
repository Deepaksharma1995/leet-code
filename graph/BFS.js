function traversal(V, adj) {
  let bfs = [];
  let vis = new Array(V).fill(false);
  let q = [];

  q.push(0);
  vis[0] = true;

  while (q.length != 0) {
    let node = q.shift();
    bfs.push(node);

    for (let it of adj[node]) {
      if (!vis[it]) {
        vis[it] = true;
        q.push(it);
      }
    }
  }

  return bfs;
}

let adj = [[1, 4], [0, 2, 3], [1], [1], [0]];

let ans = traversal(5, adj);

console.log(ans);
