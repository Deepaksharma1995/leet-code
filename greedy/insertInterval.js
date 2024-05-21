function insert(intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);

  let prev = intervals[0];
  let res = [prev];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prev[1]) {
      prev[1] = Math.max(intervals[i][1], prev[1]);
    } else {
      res.push(intervals[i]);
      prev = intervals[i];
    }
  }

  return res;
}

function insertInterval(interval, newInterval) {
  let res = [];
  for (let i = 0; i < interval.length; i++) {
    if (newInterval[1] < interval[i][0]) {
      res.push(newInterval, ...interval.slice(i));

      return res;
    } else if (newInterval[0] > interval[i][1]) {
      res.push(interval[i]);
    } else {
      newInterval[0] = Math.min(interval[i][0], newInterval[0]);
      newInterval[1] = Math.max(interval[i][1], newInterval[1]);
    }
  }

  res.push(newInterval);
  console.log(res);
  return res;
}

console.log(
  insertInterval(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);

//1 ,3 prev
//2, 5 new interval
