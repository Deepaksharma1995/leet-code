function Insert(intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }

  let result = [];
  let flag = 0;
  let i;

  for (i = 0; i <= intervals.length; i++) {
    let ints = intervals[i];
    if (ints[1] < newInterval[0]) {
      result.push(intervals[i]);
    } else if (ints[0] > newInterval[1]) {
      result.push(newInterval);
      flag = 1;
      break;
    } else {
      newInterval[0] = Math.min(ints[0], newInterval[0]);
      newInterval[1] = Math.max(ints[1], newInterval[1]);
    }
  }

  if (flag === 0) {
    result.push(newInterval);
    return result;
  } else {
    return result.concat(intervals.splice(i));
  }
}
