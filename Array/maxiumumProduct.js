function maxProduct(nums) {
  //   let max = nums[0];
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     let product = nums[i];
  //     for (let j = i + 1; j < nums.length; j++) {
  //         if(nums[j] === 0) break;
  //       if (max < product) max = product;
  //       product *= nums[j];
  //     }
  //     if (max < product) max = product;
  //   }
  //   console.log(max);

  let max = Number.MIN_SAFE_INTEGER;
  let pre = 1;
  let suff = 1;
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (pre === 0) pre = 1;
    if (suff === 0) suff = 1;
    pre *= nums[i];
    suff *= nums[n - i - 1];
    max = Math.max(max, Math.max(pre, suff));
  }
  return max;
}

maxProduct([1, 2, -3, 0, -4, -5]);
