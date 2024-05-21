function nextPermutation(nums) {
  let ind = 0;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      ind = i;
      break;
    }
  }
  if (ind === -1) {
    return nums.reverse();
  }

  console.log(ind);

  //breakpoint exists
  for (let i = nums.length - 1; i > ind; i--) {
    if (nums[i] > nums[ind]) {
      [nums[i], nums[ind]] = [nums[ind], nums[i]];
      break;
    }
  }

  console.log(nums);

  //reverse the array
  let i = ind + 1;
  let j = nums.length - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }

  return nums;
}

nextPermutation([1, 1, 5]);
