function bubbleSort(index, nums) {
  if (n === 1) return;

  for (let i = 0; i <= n - 2; i++) {
    if (nums[i] > nums[i + 1]) [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  }

  bubbleSort(nums, n - 1);
}

bubbleSort([1, 2, 3, 4, 5, 6, 7], 0, 6);
