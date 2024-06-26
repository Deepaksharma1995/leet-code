function canJump(nums) {
  let pivot = nums.length;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= pivot) {
      pivot = i;
    } else {
      continue;
    }
  }

  return pivot === 0;
}
