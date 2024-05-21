function aggCows(nums, k) {
  nums = nums.sort((a, b) => a - b);
  let low = 1,
    high = Math.max(...nums) - Math.min(...nums);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canWePlace(nums, mid, k)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  function canWePlace(nums, dist, k) {
    let cowsCount = 1;
    let lastPlacedCow = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - lastPlacedCow >= dist) {
        cowsCount++;
        lastPlacedCow = nums[i];
      }
    }

    if (cowsCount >= k) return true;
    else return false;
  }
  return low - 1;
}

aggCows([5, 4, 3, 2, 1, 1000000000], 2);
