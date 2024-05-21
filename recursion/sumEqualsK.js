function main(arr, k) {
  let result = [];

  function recur(index, sum, auxArr) {
    if (sum > k) return;
    if (index === arr.length) {
      if (sum === k) {
        result.push(auxArr);
      }
      return;
    }

    //take the element
    recur(index + 1, sum + arr[index], [...auxArr, arr[index]]);

    //don't take the element
    recur(index + 1, sum, auxArr);
  }

  recur(0, 0, []);

  console.log(result);
}

main([1, 2, 3, 1, 1, 1], 3);
