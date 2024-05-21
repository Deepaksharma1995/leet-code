function subArrayRanges(nums) {
  return subArrayMax(nums) - subArrayMin(nums);
}

function subArrayMin(nums) {
  const stack = [];
  let res = 0;

  for (let i = 0; i <= nums.length; i++) {
    while (
      stack.length !== 0 &&
      (i === n || nums[stack[stack.length - 1]] > nums[i])
    ) {
      const j = stack.pop();
      const left = j - (stack.length > 0 ? stack[stack.length - 1] : -1);
      const right = i - j;
      res += nums[j] * left * right;
    }
    stack.push(i);
  }

  return res;
}

function subArrayMax(nums) {
  const stack = [];
  let res = 0;

  for (let i = 0; i <= n; i++) {
    while (
      stack.length !== 0 &&
      (i === n || nums[stack[stack.length - 1]] < nums[i])
    ) {
      const j = stack.pop();
      const left = j - (stack.length > 0 ? stack[stack.length - 1] : -1);
      const right = i - j;
      res += nums[j] * left * right;
    }
    stack.push(i);
  }

  return res;
}
