function topoSort(V, adj) {
  const vis = new Array(V).fill(0);
  const stack = [];

  for (let i = 0; i < V; i++) {
    if (!vis[i]) {
      dfs(i, vis, adj, stack);
    }
  }

  let ans = [];

  while (stack.length > 0) {
    ans.push(stack.pop());
  }

  return ans;
}

function dfs(node, vis, adj, stack) {
  vis[node] = 1;

  for (let it of adj[node]) {
    if (!vis[it]) {
      dfs(it, vis, adj, stack);
    }
  }
  stack.push(node);
}

