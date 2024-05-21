const findMaxLength = (nums) => {
  let max_length = 0;
  const hash = {};
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    if (curr === 0) count--;
    else if (curr === 1) count++;

    if (count === 0) max_length = i + 1;
    if (count in hash) max_length = Math.max(max_length, i - hash[count]);
    else hash[count] = i;
  }
  return max_length;
};

findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]);
