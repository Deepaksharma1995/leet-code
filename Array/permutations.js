var permute = function (nums) {
  let res = [];
  nums = nums.sort((a, b) => a - b);

  function dfs(restArr, calcArr) {
    if (restArr.length === 0) {
      res.push([...calcArr]);
      return;
    }
    for (let i = 0; i < restArr.length; i++) {
      calcArr.push(restArr[i]);
      dfs(
        restArr.filter((x) => x !== restArr[i]),
        calcArr
      );
      calcArr.pop();
    }
  }

  dfs(nums, []);

  return res;
};
