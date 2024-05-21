function largestSum(nums, k) {
  let low = Math.max(...nums);
  let high = nums.reduce((a, b) => a + b, 0);
  console.log("high low", high, low);

  if (nums.length < k) return -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (isValidSplit(nums, mid) > k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

function isValidSplit(nums, currentSumSplit) {
  let count = 1;
  let sumCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + sumCount <= currentSumSplit) {
      sumCount += nums[i];
    } else {
      count++;
      sumCount = nums[i];
    }
  }
  console.log(count,currentSumSplit)
  return count;
}

console.log(largestSum([2, 3, 1, 1, 1, 1, 1], 5));
