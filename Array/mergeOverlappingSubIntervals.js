function mergeOverlappingIntervals(nums) {
  if (!nums.length) return nums;
  nums = nums.sort((a, b) => a[0] - b[0]);

  let prev = nums[0];
  const res = [prev];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i][0] < prev[1]) {
      prev[1] = Math.max(prev[1], nums[i][1]);
    } else {
      res.push(nums[i]);
      prev = nums[i];
    }
  }

  return res;
}
