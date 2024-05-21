function recur(result, n, str) {
  if (str.length === n) return result.push(str);

  // take 0
  recur(result, n, str + "0");
  // take 1
  if (str[str.length - 1] !== "1") {
    recur(result, n, str + "1");
  }

  return result;
}

function main(n) {
  let result = [];

  result = recur(result, n, "");

  console.log(result);
}

main(7);
