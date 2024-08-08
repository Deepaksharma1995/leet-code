function ninjaTraining(n) {
  const dp = new Array(n.length).fill(new Array(n[0].length + 1).fill(-1));

  return calc(n, 3, n.length - 1, dp);
}

function calc(task, last, index, dp) {
  console.log(last, index, dp);
  //base case
  if (index === 0) {
    let maxi = 0;
    for (let i = 0; i < 3; i++) {
      if (i !== last) maxi = Math.max(maxi, task[index][i]);
    }
    return maxi;
  }

  if (dp[index][last] !== -1) return dp[index][last];

  let maximum = 0;
  for (let i = 0; i < 3; i++) {
    if (i !== last) {
      let points = task[index][i] + calc(task, i, index - 1, dp);
      maximum = Math.max(maximum, points);
    }
  }

  return (dp[index][last] = maximum);
}

function tabulation(arr) {
  const dp = new Array(arr.length).fill(0).map(() => new Array(4).fill(0));
  dp[0][0] = Math.max(arr[0][1], arr[0][2]);
  dp[0][1] = Math.max(arr[0][0], arr[0][2]);
  dp[0][2] = Math.max(arr[0][0], arr[0][1]);
  dp[0][3] = Math.max(arr[0][0], arr[0][1], arr[0][2]);

  for (let day = 1; day < arr.length - 1; day++) {
    for (let last = 0; last < 4; last++) {
      dp[day][last] = 0;
      let maxi = 0;
      for (let task = 0; task < 3; task++) {
        if (task !== last) {
          let points = arr[day][task] + dp[day - 1][task];
          maxi = Math.max(maxi, points);
        }
      }
      dp[day][last] = maxi;
    }
  }
  return dp[arr.length - 1][3];
}

const x = tabulation([
  [1, 2, 5],
  [3, 1, 1],
  [3, 3, 3],
]);
console.log(x);
