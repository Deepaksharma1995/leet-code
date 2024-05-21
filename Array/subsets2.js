var subsetsWithDup = function (nums) {
  const res = [];
  nums = nums.sort((a, b) => a - b);

  function backtrack(i, subset) {
    if (i === nums.length) {
      res.push([...subset]);
      return;
    }

    //all the subsets that includes nums[i]
    subset.push(nums[i]);
    backtrack(i + 1, subset);

    //all the number that don't include nums[i]
    subset.pop();
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
    backtrack(i + 1, subset);
  }

  backtrack(0, []);

  return res;
};

console.log(subsetsWithDup([1, 2, 2]));
