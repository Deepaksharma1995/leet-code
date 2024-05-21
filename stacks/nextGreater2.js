function nextGreaterElement(nums) {
  let stack = [];
  let n = nums.length;
  let result = new Array(n).fill(-1);

  for (let i = 2 * n - 1; i >= 0; i--) {
    console.log("first stack", stack);
    while (stack.length !== 0 && stack[stack.length - 1] <= nums[i % n]) {
      stack.pop();
    }
    console.log(nums[i % n], i, stack, result);
    if (i < n) {
      if (stack.length !== 0) {
        result[i] = stack[stack.length - 1];
      }
    }
    stack.push(nums[i % n]);
  }

  console.log(result, "iabgskhdbsahk");

  return result;
}

nextGreaterElement([1, 2, 1]);
