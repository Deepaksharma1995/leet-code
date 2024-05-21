function minWeight(nums, days) {
  let low = Math.max(...nums);
  let high = nums.reduce((a, b) => a + b, 0);
  let Mindays = -Infinity;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    Mindays = calculateWeight(nums, mid);
    if (Mindays > days) low = mid + 1;
    else high = mid - 1;
  }

  function calculateWeight(nums, capacity) {
    let totalDays = 1;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] > capacity) {
        totalDays++;
        sum = nums[i];
      } else {
        sum = sum + nums[i];
      }
    }
    return totalDays;
  }

  return low;
}

console.log(minWeight([5, 4, 5, 2, 3, 4, 5, 6], 1));
