function previousSmaller(nums) {
  const stack = [];
  const result = new Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] >= nums[i]) {
      stack.pop();
    }
    if (stack.length !== 0) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(nums[i]);
  }
  console.log(result);

  return result;
}

previousSmaller([3, 7, 8, 4]);
