function isBipartite(adj) {
  const V = graph.length;
  let color = new Array(V).fill(-1);

  // for connected components
  for (let i = 0; i < V; i++) {
    if (color[i] === -1) {
      if (!this.dfs(i, 0, color, adj)) return false;
    }
  }
  return true;
}

function dfs(node, col, color, adj) {
  color[node] = col;

  // traverse adjacent nodes
  for (let it of adj[node]) {
    // if uncoloured
    if (color[it] === -1) {
      if (!dfs(it, 1 - col, color, adj)) return false;
    }
    // if previously coloured and have the same colour
    else if (color[it] === col) {
      return false;
    }
  }

  return true;
}
