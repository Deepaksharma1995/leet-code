/**
 * Calculates the shortest path from a source node to all other nodes in a directed acyclic graph (DAG).
 *
 * @param {number} V - the number of nodes in the graph
 * @param {number[][]} edges - the edges of the graph, where each edge is represented as a pair of nodes
 * @param {number} src - the source node
 * @return {number[]} - an array containing the shortest distance from the source node to each other node
 *
 * Example:
 * Input: V = 6, edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]], src = 0
 * Output: [0, 1, 2, 3, 4, 5]
 */
class Solution {
  shortestPath(V, edges, src) {
    // Create an adjacency list representation of the graph
    const adj = new Array(V).fill([]);

    for (const it of edges) {
      adj[it[0]] = [...adj[it[0]], it[1]];
    }

    // Perform topological sorting to obtain a sorted order of nodes
    const topo = this.toposort(V, adj);

    // Initialize the distance array with Infinity
    const dist = new Array(V).fill(Infinity);
    dist[src] = 0;

    // Update the distance of each node based on the previous node
    for (let i = 0; i < topo.length; i++) {
      const node = topo[i];
      for (const it of adj[node]) {
        if (dist[node] + 1 < dist[it]) {
          dist[it] = dist[node] + 1;
        }
      }
    }

    return dist;
  }

  /**
   * Performs topological sorting on a directed graph and returns the sorted order of nodes.
   *
   * @param {number} V - the number of nodes in the graph
   * @param {number[][]} adj - the adjacency list representation of the graph
   * @return {number[]} - an array containing the sorted order of nodes
   *
   * Example:
   * Input: V = 6, edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]
   * Output: [0, 1, 2, 3, 4, 5]
   */
  toposort(V, adj) {
    // Create empty visitation and stack arrays
    const vis = new Array(V).fill(0);
    const stack = [];

    // Perform depth-first search to visit each node and push them to the stack
    dfs(0, vis, adj, stack); // Root node

    // Reverse the stack to get the reverse order of nodes
    const ans = [];
    while (stack.length > 0) {
      ans.push(stack.pop());
    }

    return ans;
  }
}

/**
 * Performs depth-first search on a directed graph and pushes the nodes to a stack in reverse order.
 *
 * @param {number} node - the current node being visited
 * @param {boolean[]} vis - an array indicating whether each node has been visited
 * @param {number[][]} adj - the adjacency list representation of the graph
 * @param {number[]} stack - the stack to store the nodes in reverse order
 */
function dfs(node, vis, adj, stack) {
  vis[node] = true;
  stack.push(node); // Push the node to the stack

  for (const it of adj[node]) {
    if (!vis[it]) {
      dfs(it, vis, adj, stack); // Recursive call for the neighboring node
    }
  }
}

// Example graph
//          0
//        /   \
//       1     2
//      / \   / \
//     3   4 5   6
//
// Topological sorting: [0, 1, 3, 4, 2, 5, 6]
//

function mySolution(N, M, edges, src) {
  const adj = new Array(N).fill([]);

  for (const edge of edges) {
    const u = edge[0];
    const v = edge[1];
    const wt = edge[2];
    adj[u] = [...adj[u], [v, wt]];
  }

  const st = topoSort(N, adj);

  const dist = new Array(N).fill(Infinity);
  dist[src] = 0;

  while (st.length > 0) {
    const node = st.pop();

    for (const it of adj[node]) {
      const v = it[0];
      const wt = it[1];

      if (dist[node] + wt < dist[v]) {
        dist[v] = dist[node] + wt;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    if (dist[i] === Infinity) dist[i] = -1;
  }

  return dist;
}

function topoSort(N, adj) {
  const vis = new Array(N).fill(0);
  const stack = [];

  for (let i = 0; i < N; i++) {
    if (!vis[i]) {
      dfs(i, vis, adj, stack);
    }
  }
}

function dfs(node, vis, adj, stack) {
  vis[node] = 1;

  for (const it of adj[node]) {
    const target = it[0];
    if (!vis[target]) {
      dfs(target, vis, adj, stack);
    }
  }

  stack.push(node);
  return stack;
}
