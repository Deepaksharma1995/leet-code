function subsetSum(n, k, arr) {
  let result = false;

  function recur(index, sum, auxArr) {
    if (sum > k) return false;
    if (index === n) {
      if (sum === k) {
        return true;
      }
      return false;
    }
    if (recur(index + 1, sum + arr[index], [...auxArr, arr[index]]))
      return true;
    if (recur(index + 1, sum, auxArr)) return true;

    return false;
  }

  result = recur(0, 0, []);
  console.log(result);
  return result;
}

subsetSum(5, 14, [4, 2, 5, 6, 7]);
