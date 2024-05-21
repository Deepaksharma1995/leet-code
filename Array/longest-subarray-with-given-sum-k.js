//the better one along with negative

var subarraySum = function (nums, k) {
  const hash = {};
  let sum = 0;
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum == k) length = Math.max(length, i + 1);
    let rem = sum - k;

    if (hash.hasOwnProperty(rem)) {
      let len = i - hash[rem];
      length = Math.max(length, len);
    }
    if (!hash[sum]) {
      hash[sum] = i;
    }
  }
  return length;
};

subarraySum([1, 1, 1], 2);

//optimal approach 2 pointer only for positive including zero

function longestSubArrayWihtSumK(nums, k) {
  let left = 0,
    right = 0,
    sum = nums[0],
    maxLength = 0,
    n = nums.length;
  while (right < n) {
    while (left <= right && sum > k) {
      sum -= nums[left];
      left++;
    }
    if (sum == k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
    if (right < n) {
      sum += nums[right];
    }
  }

  return maxLength;
}
