//next greater element

function nextGreaterElement(nums) {
  let stack = [];
  let result = new Array(nums.length).fill(-1);

  for (let i = 2 * nums.length - 1; i >= 0; i--) {
    while (
      stack.length !== 0 &&
      stack[stack.length - 1] <= nums[i % nums.length]
    ) {
      stack.pop();
    }
    if (i < nums.length) {
      if (stack.length !== 0) {
        result[i] = stack[stack.length - 1];
      }
    }
    stack.push(nums[i % nums.length]);
    console.log(stack, "and this is result", result);
  }

  console.log(result);
}

//nextGreaterElement([1, 4, 12, 3, 1, 5, 1, 2, 3, 4, 6]);

//previous Greater element

function previousGreaterElement(nums) {
  let stack = [];
  let result = new Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    console.log(stack);
    while (stack.length !== 0 && stack[stack.length - 1] < nums[i]) {
      stack.pop();
    }
    if (stack.length !== 0) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(nums[i]);
  }

  console.log(result);
}

//previousGreaterElement([1, 4, 12, 3, 1, 5, 1, 2, 3, 4, 6]);

//previous smaller element
function previosSmallerElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    console.log(stack);
    while (stack.length !== 0 && stack[stack.length - 1] >= nums[i]) {
      stack.pop();
    }
    if (stack.length !== 0) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(nums[i]);
  }
  console.log("PSE", result);
}

previosSmallerElement([1, 4, 12, 3, 1, 5, 1, 2, 3, 4, 6]);

//next smaller element
function nextSmallerElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    console.log(stack);
    while (stack.length !== 0 && stack[stack.length - 1] >= nums[i]) {
      stack.pop();
    }
    if (stack.length !== 0) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(nums[i]);
  }

  console.log(result);
}
//console.log("NLE", nextSmallerElement([11, 81, 94, 43, 3]));

//nextSmallerElement([1, 4, 12, 3, 1, 5, 1, 2, 3, 4, 6]);
