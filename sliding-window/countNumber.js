var numberOfSubarrays = function (nums, k) {
  if (nums.length < k) return 0;
  let count = 0;
  nums.forEach((d) => d % 2 !== 0 && count++);
  if (count < k) return 0;
  nums.forEach((d, idx) => (d % 2 == 0 ? (nums[idx] = 0) : (nums[idx] = 1)));

  //prefix-sum
  let prefixSum = { 0: 1 };
  count = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const remove = sum - k;
    console.log(prefixSum, count, remove);
    if (prefixSum.hasOwnProperty(remove)) {
      count += prefixSum[remove];
    }
    if (prefixSum.hasOwnProperty(sum)) {
      prefixSum[sum] += 1;
    } else {
      prefixSum[sum] = 1;
    }
  }
  return count;
};

numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2);
