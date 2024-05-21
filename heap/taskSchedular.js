function leastInterval(tasks, n) {
  //base cases
  if (tasks.length === 0 || tasks.length === 1) return tasks.length; //if only one task
  if (n === 0 || n === 1) return tasks.length; //if rest period is one

  //main code
  let map = {};
  let queue = [];
  let total = tasks.length;
  let count = 0;

  for (let i = 0; i < tasks.length; i++) {
    if (map.hasOwnProperty(tasks[i])) map[tasks[i]]++;
    else map[tasks[i]] = 1;
  }

  let i = 0;
  let ns = n;
  while (total > 0) {
    if (!queue.includes(tasks[i])) {
      ns--;
      queue.push(tasks[i]);
      total--;
      map[tasks[i]]--;
    }

    if (map[tasks[i]] === 0) delete map[tasks[i]];

    if (ns === 0) {
      queue = [];
      ns = n;
    }
    count++;
  }

  return count;
}

leastInterval(["A", "B", "C", "A", "A", "A", "B", "C", "C", "C", "B", "A"], 3);
