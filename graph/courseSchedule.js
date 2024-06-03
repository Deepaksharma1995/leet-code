function canFinish(numCourses, prerequisites) {
  const adj = new Array(numCourses + 1).fill([]);
  for (const it of prerequisites) {
    adj[it[0]] = [...adj[it[0]], it[1]];
  }

  const vis = new Array(numCourses + 1).fill(0);
  const path = new Array(numCourses + 1).fill(0);
  const res = [];
  for (let i = 0; i < adj.length; i++) {
    if (!vis[i]) {
      if (dfs(i, adj, vis, path, res) === false) {
        return false;
      }
    }
  }

  return true;
}

function dfs(node, adj, vis, path, res) {
  vis[node] = 1;
  path[node] = 1;

  for (let it of adj[node]) {
    if (!vis[it]) {
      if (dfs(it, adj, vis, path) === false) return false;
    } else if (path[it]) return false;
  }

  path[node] = 0;
  res.push(node);
  return true;
}

const x = canFinish(4, [[1, 0]]);

console.log(x);
