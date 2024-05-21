function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];

  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (prev[1] > intervals[i][0]) {
      count++;
      continue;
    } else {
      prev[0] = Math.min(prev[0], intervals[i][0]);
      prev[1] = Math.max(prev[1], intervals[i][1]);
    }
  }

  return count;
}
