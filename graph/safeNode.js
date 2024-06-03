var eventualSafeNodes = function (graph) {
  const V = graph.legnth;
  const vis = new Array(V).fill(0);
  const pathVis = new Array(V).fill(0);
  const check = new Array(V).fill(0);
  const safeNodes = [];

  for (let i = 0; i < V; i++) {
    if (!vis[i]) {
      dfsCheck(i, vis, pathVis, check, graph);
    }
  }

  for (let i = 0; i < V; i++) {
    if (check[i] === 1) safeNodes.push(i);
  }

  return safeNodes;
};

function dfsCheck(node, vis, pathVis, check, graph) {
  vis[node] = 1;
  pathVis[node] = 1;
  check[node] = 0;

  for (const it of adj[node]) {
    if (!vis[it]) {
      if (dfsCheck(it, vis, pathVis, check, graph) === true) {
        check[node] = false;
        return true;
      }
    } else if (pathVis[it]) {
      check[node] = false;
      return true;
    }
  }

  check[node] = 1;
  pathVis[node] = 0;
  return false;
}
