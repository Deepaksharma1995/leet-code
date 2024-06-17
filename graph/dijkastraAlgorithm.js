class PriorityQ {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push(val);
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a[0] - b[0]);
  }
}

function minimumEffortPath(heights) {
  const n = heights.length;
  const m = heights[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const pq = new PriorityQ();
  const dist = new Array(heights.length)
    .fill(0)
    .map(() => new Array(heights[0].length).fill(Infinity));
  pq.enqueue([0, 0, 0]);

  while (pq.values.length > 0) {
    const [currentEffort, i, j] = pq.dequeue();

    if (i === n - 1 && j === m - 1) {
      return currentEffort;
    }

    for (const [x, y] of directions) {
      const ni = i + x;
      const nj = j + y;
      if (ni >= 0 && ni < n && nj >= 0 && nj < m) {
        const newEffort = Math.max(
          currentEffort,
          Math.abs(heights[i][j] - heights[ni][nj])
        );
        if (newEffort < dist[ni][nj]) {
          dist[ni][nj] = newEffort;
          pq.enqueue([newEffort, ni, nj]);
        }
      }
    }
  }
}
