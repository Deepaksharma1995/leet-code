function combinationSum(arr, target) {
  const res = [];

  function recur(index, cur, total) {
    //adding the set case
    if (total === target) {
      res.push([...cur]);
      return;
    }

    //base case
    if (index >= arr.length || total > target) return;

    //decision one
    cur.push(arr[index]);
    recur(index, cur, total + arr[index]);

    //decision where the current element not taken
    cur.pop();
    recur(index + 1, cur, total);
  }

  recur(0, [], 0);

  console.log(res);
  return res;
}

combinationSum([2, 3, 6, 7], 7);
