function isDirectedCyclic(V, adj) {
  const vis = new Array(V).fill(0);
  const pathVis = new Array(V).fill(0);

  for (let i = 0; i < V; i++) {
    if (!vis[i]) {
      if (dfsCheck(i, adj, vis, pathVis) === true) return true;
    }
  }

  return false;
}

function dfsCheck(node, adj, vis, pathVis) {
  vis[node] = 1;
  pathVis[node] = 1;

  //traverse for adjecent nodes
  for (let it of adj[node]) {
    //if node is not visited
    if (!vis[it]) {
      if (dfsCheck(it, adj, vis, pathVis) === true) return true;
    } else if (pathVis[it]) {
      return true;
    }
  }

  pathVis[node] = 0;
  return false;
}
