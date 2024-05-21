function combinationSum(k, n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  let result = [];

  function main(index, total, auxArr) {
    if (total > n) return;
    if (index === arr.length) {
      if (total === n && auxArr.length === k) result.push(auxArr);
      return;
    }

    //take it
    main(index + 1, total + arr[index], [...auxArr, arr[index]]);

    //dont take
    main(index + 1, total, auxArr);
  }

  main(0, 0, []);
  return result;
}

combinationSum(3, 9);
