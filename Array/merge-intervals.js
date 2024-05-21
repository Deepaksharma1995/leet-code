var merge = function (intervals) {
  if (!intervals.length) return intervals;

  intervals = intervals.sort((a, b) => a[0] - b[0]);
  // console.log(intervals);
  let prev = intervals[0];
  const res = [prev];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= prev[1]) {
      prev[1] = Math.max(prev[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
      //console.log(res);
      prev = intervals[i];
    }
  }
  //console.log(res);
  return res;
};

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
