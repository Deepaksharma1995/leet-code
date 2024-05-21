function canFinish(numCourses, prerequisites) {
  const adj = new Array(numCourses).fill([]);

  for (const it of prerequisites) {
    adj[it[0]] = [...adj[it[0]], it[1]];
  }

  console.log(adj);
}

canFinish()