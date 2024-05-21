function letterCombinations(digits) {
  const arr = {
    2: "abc",

    3: "def",
    4: "ghi",
    5: "klm",
    6: "nop",
    7: "qrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  function recur(index, curStr) {
    if (curStr.length === digits.length) {
      result.push(curStr);
      return;
    }

    for (let x of arr[digits[index]]) {
      recur(index + 1, curStr + x);
    }
  }
  if (digits.length) {
    recur(0, "");
  }
  return result;
  //   console.log(result);
}

letterCombinations("237");
