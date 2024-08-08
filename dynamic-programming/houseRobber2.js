function rob(nums) {
  const dp1 = new Array(nums.length).fill(-1);
  const dp2 = new Array(nums.length).fill(-1);
  return Math.max(
    calc(nums.slice(0, nums.length - 1), nums.length - 2),
    calc(nums.slice(1, nums.length), nums.length - 2)
  );
}

function calc(nums, index, dp) {
  if (index == 0) return nums[0];
  if (dp[index] !== -1) return dp[index];
  if (index < 0) return 0;
  let m1 = nums[index] + calc(nums, index - 2, dp);
  let m2 = 0 + calc(nums, index - 1, dp);

  return (dp[index] = Math.max(m1, m2));
}
