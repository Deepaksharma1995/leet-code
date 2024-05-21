function subsetSum(arr, n) {
  const result = [];

  function recur(index, total) {
    if (index === n) {
      result.push(total);
      return;
    }

    //take element
    recur(index + 1, total + arr[index]);

    //don't take
    recur(index + 1, total);
  }

  recur(0, 0, []);

  console.log(result);
  return result;
}
subsetSum([1, 2, 3, 4], 4);
