function longestSumWithZero(nums) {
  let hash = new Map();
  let length = 0;
  let currentLength = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === 0) currentLength = i + 1;
    if (hash.has(sum)) {
      currentLength = i - hash.get(sum);
    } else {
      hash.set(sum, i);
    }
    if (currentLength > length) length = currentLength;
  }

  return length;
}

console.log(longestSumWithZero([1, 3, -5, 6, -2]));
