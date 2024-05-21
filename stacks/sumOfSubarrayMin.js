function suumSubArrayMin(nums) {
  const stackP = [];
  const stackN = [];

  const left = new Array(nums.length).fill(0);
  const right = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) left[i] = i + 1;
  for (let i = 0; i < nums.length; i++) right[i] = nums.length - i;

  for (let i = 0; i < nums.length; i++) {
    //search for PLE
    while (stackP.length !== 0 && stackP[stackP.length - 1].val > nums[i]) {
      stackP.pop();
    }
    if (stackP.length !== 0) {
      left[i] = i - stackP[stackP.length - 1].index;
    } else {
      left[i] = i + 1;
    }
    stackP.push({ val: nums[i], index: i });

    //search for NLE
    while (stackN.length !== 0 && stackN[stackN.length - 1].val > nums[i]) {
      const x = stackN.pop();
      right[x.index] = i - x.index;
    }
    stackN.push({ val: nums[i], index: i });
  }

  let ans = 0,
    mod = Math.pow(10, 9) + 7;

  for (let i = 0; i < nums.length; i++) {
    ans = (ans + left[i] * right[i] * nums[i]) % mod;
  }
  console.log(ans);
  return ans;
}

function subArraySumMin(nums) {
  let stack = [-1];
  let res = 0;
  let M = 10 ** 9 + 7;
  nums.push(0);
  let i, i1, Left, Right;

  for (let i2 = 0; i2 < nums.length; i2++) {
    while (nums[i2] < nums[stack[stack.length - 1]]) {
      i = stack.pop();
      i1 = stack[stack.length - 1];
      Left = i - i1;
      Right = i2 - i;
      res += Left * Right * nums[i];
    }
    stack.push(i2);
  }
  console.log(res);
  return res % M;
}

function practice(nums) {
  const stackL = [];
  const stackR = [];
  const leftSubArr = new Array(nums.length).fill(-1);
  const rightSubArr = new Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    //previous smaller element
    //console.log(stackL);
    while (stackL.length !== 0 && nums[stackL[stackL.length - 1]] > nums[i]) {
      stackL.pop();
    }
    if (stackL.length) {
      leftSubArr[i] = i - stackL[stackL.length - 1];
    } else {
      leftSubArr[i] = i + 1;
    }
    stackL.push(i);
    //for next smaller element
    while (stackR.length !== 0 && nums[stackR[stackR.length - 1]] >= nums[i]) {
      const x = stackR.pop();
      rightSubArr[x] = i - x;
    }
    stackR.push(i);
  }

  let ans = 0,
    mod = Math.pow(10, 9) + 7;

  for (let i = 0; i < nums.length; i++) {
    ans = (ans + leftSubArr[i] * rightSubArr[i] * nums[i]) % mod;
  }

  console.log(ans);

  return ans;
}

practice([11, 81, 94, 43, 3]);
suumSubArrayMin([4, -2, -3, 4, 1]);
subArraySumMin([4, -2, -3, 4, 1]);
