function maximumSubarray(nums) {
  let i = 0,
    j = 0,
    currSum = Number.NEGATIVE_INFINITY,
    maxSum = Number.NEGATIVE_INFINITY;

  while (j < nums.length) {
    currSum = currSum + nums[j];
    if (nums[j] > currSum) {
      i = j;
      currSum = nums[j];
    }
    maxSum = Math.max(currSum, maxSum);
    console.log(maxSum);
    j++;
  }

  return maxSum;
}

console.log(maximumSubarray([-2, -1]));

//[-1,2,1,-3,2,8,-4,2]

//10
