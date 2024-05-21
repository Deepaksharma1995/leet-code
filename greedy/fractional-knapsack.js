function fractionalKnapsack(n, w, values) {
  values.sort((a, b) => b[0] / b[1] - a[0] / a[1]);
  console.log(values);

  let total = 0;
  let totalVal = 0;

  for (let i = 0; i < values.length; i++) {
    if (total + values[i][1] <= w) {
      total = total + values[i][1];
      totalVal += values[i][0];
    } else {
      let remain = w - total;
      totalVal += (values[i][0] / values[i][1]) * remain;
      break;
    }
  }
  
  return totalVal;
}

let item = [
  [100, 20],
  [60, 10],
  [120, 30],
];
let n = 3;
let weight = 50;

fractionalKnapsack(n, weight, item);
