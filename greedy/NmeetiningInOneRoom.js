function totalMeeting(n, s, e) {
  let agg = [];

  for (let i = 0; i < s.length; i++) {
    agg[i] = [s[i], e[i]];
  }

  agg.sort((a, b) => a[1] - b[1]);

  let stack = [];
  let count = 0;

  for (let i = 0; i < agg.length; i++) {
    if (agg?.[i - 1]?.[1] && agg[i][1] === agg[i - 1][1]) continue;
    if (stack[stack.length - 1] < agg[i][0] || stack.length === 0) {
      count++;
      stack.push(agg[i][1]);
    }
    console.log(stack, i, agg[i], count);
  }
  console.log(count);
  return count;
}

const s = [75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924];
const e = [112960, 114515, 81825, 93424, 54316, 35533, 73383, 160252];
totalMeeting(8, s, e);
