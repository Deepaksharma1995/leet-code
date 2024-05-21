var minDays = function (bloomDay, m, k) {
  let totalFlowersReq = m * k;
  let n = bloomDay.length;
  let high = Math.max(...bloomDay);
  let low = Math.min(...bloomDay);
  let doesSatisfy = false;

  if (totalFlowersReq > n) return -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    doesSatisfy = calculateDays(bloomDay, mid, m, k);
    if (!doesSatisfy) low = mid + 1;

    if (doesSatisfy) high = mid - 1;
  }

  function calculateDays(arr, day, m, k) {
    let n = arr.length; // Size of the array
    let cnt = 0;
    let noOfB = 0;
    // Count the number of bouquets
    for (let i = 0; i < n; i++) {
      if (arr[i] <= day) {
        cnt++;
      } else {
        noOfB += Math.floor(cnt / k);
        cnt = 0;
      }
    }
    noOfB += Math.floor(cnt / k);
    return noOfB >= m;
  }
  if (doesSatisfy) return low;
  else return -1;
};

console.log(minDays([1, 10, 3, 10, 2], 3, 1));
