function shortestPath(edges, n, m, src) {
  // code here
  const adj = new Array(n).fill([]);

  for (const it of edges) {
    adj[it[0]] = [...adj[it[0]], it[1]];
    adj[it[1]] = [...adj[it[1]], it[0]];
  }

  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  const q = [];
  q.push(src);

  while (q.length > 0) {
    const node = q.shift();

    for (const it of adj[node]) {
      if (dist[node] + 1 < dist[it]) {
        dist[it] = dist[node] + 1;
        q.push(it);
      }
    }
  }

  const res = [];
  for (let i = 0; i < n; i++) {
    if (dist[i] !== Infinity) res[i] = dist[i];
    else res[i] = -1;
  }

  return res;
}
