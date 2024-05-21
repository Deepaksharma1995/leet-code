var combinationSum = function (candidates, target) {
  const res = [];

  function dfs(i, cur, total) {
    if (total === target) {
      res.push([...cur]);
      return;
    }
    if (i >= candidates.length || total > target) return;

    //first decision
    cur.push(candidates[i]);
    dfs(i, cur, total + candidates[i]);

    //second decision
    cur.pop();
    dfs(i + 1, cur, total);
  }

  dfs(0, [], 0);
  console.log(res);
  return res;
};

combinationSum([2, 3, 6, 7], 7);
