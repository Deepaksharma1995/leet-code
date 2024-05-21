function findDivisor(nums, limit) {
  let high = Math.max(...nums);
  let smallDiv = 1;
  let low = 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let currSum = 0;

    for (let j = 0; j < nums.length; j++) {
      currSum += Math.ceil(nums[j] / mid);
      if (currSum > limit) break;
    }
    if (currSum <= limit) {
      smallDiv = i;
      high = mid - 1;
    }
    low = mid + 1;
  }
  return smallDiv;
}

findDivisor([1, 2, 5, 9], 6);
