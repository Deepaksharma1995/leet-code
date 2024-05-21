function nextLess(nums) {
  let result = new Array(nums.length).fill(-1);
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    console.log(
      "at index",
      i,
      "and stack",
      stack,
      nums[stack[stack.length - 1]],
      "and nums[i] is",
      nums[i]
    );
    while (stack.length !== 0 && nums[stack[stack.length - 1]] > nums[i]) {
      const x = stack.pop();
      result[x] = nums[i];
      console.log(
        "here I am gonna see result and it changing",
        result,
        "and x",
        x
      );
    }
    stack.push(i);
    console.log(stack, "this is stack after valuation\n\n\n\n\n");
  }
  console.log(result, "asdkbdhkasj");
}

nextLess([3, 7, 8, 4]);
