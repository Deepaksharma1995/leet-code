function recur(n, str, index, result, localStr) {
  if (index === n) {
    if (result.includes(localStr)) return;
    return result.push(localStr);
  }

  //take it
  recur(n, str, index + 1, result, localStr + str[index]);

  //dont take it
  recur(n, str, index + 1, result, localStr);

  return result;
}

function main(n, m, a, b) {
  let result1 = [];
  let result2 = [];

  result1 = recur(n, a, 0, [], "");
  result2 = recur(m, b, 0, [], "");

  //console.log(result1, result2);
}

main(2, 2, "aa", "ab");
