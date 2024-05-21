var productExceptSelf = function (nums) {
  if (nums.length < 1) return nums;
  let product = [];

  for (let i = 0; i < nums.length; i++) {
    let mul = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        mul = mul * nums[j];
      }
    }
    product[i] = mul;
    mul = 1;
  }

  return product;
};
