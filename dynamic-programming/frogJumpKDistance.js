function minimizeCost(height, n, k) {
  // your code here
  if (n === 0) return 0;
  let min = Infinity;

  for (let i = 1; i <= k; i++) {
    if (n - i >= 0) {
      let val =
        minimizeCost(height, n - i, k) + Math.abs(height[n] - height[n - i]);
      console.log("index from", n, n - i, val);
      min = Math.min(val, min);
    }
  }

  return min;
}

console.log("yaha zero hai kya??", minimizeCost([10, 30, 40, 50, 20], 4, 3));

function minimizeCostUsingTabulation(height, n, k) {
  const dp = new Array(n).fill(0);
  dp[0] = 0;

  for (let i = 1; i < n; i++) {
    let min = Infinity;
    for (let j = 1; j <= k && j < n; j++) {
      if (i - j >= 0) {
        let val = dp[i - j] + Math.abs(height[i] - height[i - j]);
        min = Math.min(min, val);
      }
    }
    dp[i] = min;
  }

  return dp[n - 1];
}
