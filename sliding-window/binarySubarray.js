var numSubarraysWithSum = function (nums, goal) {
  let output = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === goal) output++;
      if (sum > goal) break;
    }
  }
  console.log(output);
  return output;
};

//numSubarraysWithSum([1, 0, 1, 0, 1], 1);

//better way

var numSubarraysWithSum2 = function (nums, goal) {
  let prefixSum = { 0: 1 };
  let count = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    let remove = sum - goal;
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

//optimal appproach
function numSubarraysWithSum3(nums, goal) {
  let left = 0;
  let right = 0;
  let sum = nums[0];
  let count = 0;
  let n = nums.length;
  while (right < n) {
    while (sum > goal && left <= right) {
      sum -= nums[left];
      left++;
      if (sum === goal) count++;
    }
    if (sum === goal) count++;
    right++;
    if (right < n) sum += nums[right];
    if (sum === goal) count++;
  }
  console.log(count);
}

numSubarraysWithSum3([1, 0, 1, 0, 1], 1);
