var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  const res = [];

  function backtrack(i, currSum, auxArr) {
    if (currSum === target) {
      res.push([...auxArr]);
    }

    if (i >= candidates.length && total > target) return;

    //choose the number
    auxArr.push(candidates[i]);
    backtrack(i + 1, currSum + candidates[i], auxArr);

    //not chose the number
    auxArr.pop();
    while (i < candidates.length && candidates[i] === candidates[i + 1]) {
      i++;
    }
    backtrack(i + 1, currSum, auxArr);
  }
  backtrack(0, 0, []);

  return res;
};
