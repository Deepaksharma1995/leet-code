const rob = (nums) => {
  let dp = new Array(nums.length + 1).fill(0);
  return calc(nums, nums.length - 1, dp);
};

function calc(nums, index, dp) {
  if (index === 0) return nums[0];
  if (index < 0) return 0;
  if (dp[index] !== 0) return dp[index];

  //picking up
  let m1 = nums[index] + calc(nums, index - 2, dp);

  //not picking up
  let m2 = 0 + calc(nums, index - 1, dp);
  return (dp[index] = Math.max(m1, m2));
}

const x = rob([1, 2, 3, 1]);
console.log(x);

const tabulation = (nums) => {
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[nums.length - 1];
};
