class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enque(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  deqeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
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
  const pq = new PriorityQueue();
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
          efforts[ni][nj] = newEffort;
          pq.enqueue([newEffort, ni, nj]);
        }
      }
    }
  }
}

const x = minimumEffortPath([
  [1, 2, 1, 1, 1],
  [1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1],
  [1, 1, 1, 2, 1],
]);

console.log(x);
