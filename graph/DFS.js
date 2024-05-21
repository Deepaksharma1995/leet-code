function traversal(V, adj) {
  let vis = new Array(V).fill(false);
  vis[0] = true;
  let ls = [];

  function dfs(node, vis, adj, ls) {
    vis[node] = true;
    ls.push(node);

    for (let it of adj[node]) {
      if (!vis[it]) {
        dfs(it, vis, adj, ls);
      }
    }
  }

  dfs(0, vis, adj, ls);

  return ls;
}
