var subarraySum = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    if (sum === k) count++;
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }

  console.log(count);

  return count;
};

subarraySum([1, 2, 3], 3);
