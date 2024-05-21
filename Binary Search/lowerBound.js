function lowerBound(nums, n, x) {
  let low = 0,
    high = n - 1;

  let ans = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}
