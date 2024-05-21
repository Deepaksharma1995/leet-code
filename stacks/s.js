function sumOfSubarrayMinimums(nums) {
  const n = nums.length;
  const stack = [];
  const mod = 1e9 + 7; // To handle large numbers
  let result = 0;

  for (let i = 0; i <= n; i++) {
    while (
      stack.length > 0 &&
      (i === n || nums[i] < nums[stack[stack.length - 1]])
    ) {
      const j = stack.pop();
      const left = j - (stack.length > 0 ? stack[stack.length - 1] : -1);
      const right = i - j;
      result = (result + ((nums[j] * left * right) % mod)) % mod;
    }
    stack.push(i);
  }

  return result;
}

// Example usage
const nums = [4, -2, -3, 4, 1];
const result = sumOfSubarrayMinimums(nums);
//console.log(result); // Output: 17

function sumOfSubarrayMax(nums) {
  const n = nums.length;
  const stack = [];
  const mod = 1e9 + 7; // To handle large numbers
  let result = 0;

  for (let i = 0; i <= n; i++) {
    while (
      stack.length > 0 &&
      (i === n || nums[i] > nums[stack[stack.length - 1]])
    ) {
      const j = stack.pop();
      const left = j - (stack.length > 0 ? stack[stack.length - 1] : -1);
      const right = i - j;
      result = (result + ((nums[j] * left * right) % mod)) % mod;
    }
    stack.push(i);
  }

  return result;
}

// Example usage
const nums1 = [3, 1, 2, 4];
const result1 = sumOfSubarrayMax(nums);
//console.log(result1); // Output: 17

function sumMinArrays(nums) {
  const stack = [];
  let resMin = 0;
  const M = 10 ** 9 + 7;

  for (let i = 0; i <= nums.length; i++) {
    while (
      stack.length !== 0 &&
      (i === nums.length || nums[stack[stack.length - 1]] > nums[i])
    ) {
      const j = stack.pop();
      const left = j - (stack.length > 0 ? stack[stack.length - 1] : -1);
      const right = i - j;
      console.log("at index is", i, left, right);
      resMin = (resMin + ((nums[j] * left * right) % M)) % M;
    }
    stack.push(i);
    console.log(stack, "and result", resMin, "at index", i);
  }
  console.log(resMin);

  return resMin;
}

sumMinArrays([3, 1, 2, 4]);
