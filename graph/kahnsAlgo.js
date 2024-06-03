function topSortKahns(V, adj) {
  const indegree = new Array(V).fill(0);

  for (let i = 0; i < V; i++) {
    for (it of adj[i]) {
      indegree[it]++;
    }
  }
  const q = [];
  for (let i = 0; i < V; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }
  const topo = [];

  while (q.length > 0) {
    const node = q.shift();
    topo.push(node);

    for (const it of adj[node]) {
      indegree[it]--;
      if (indegree[it] === 0) q.push(it);
    }
  }

  return topo;
}
