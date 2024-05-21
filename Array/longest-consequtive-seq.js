var longestConsecutive = function (nums) {
  nums = nums.sort((a, b) => a - b);

  //   console.log(nums);

  let longest = 0;
  let current = 0;

  if (nums.length <= 1) {
    return nums.length;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] === 1) {
      current++;
      //   console.log(nums[i + 1] - nums[i], current, longest);
      if (current > longest) {
        longest = current;
      }
    } else if (nums[i + 1] - nums[i] === 0) {
      continue;
    } else {
      current = 0;
    }
  }

  return longest + 1;
};

longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
