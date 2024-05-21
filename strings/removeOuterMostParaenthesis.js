var removeOuterParenthesis = function (s) {
  let parenthesisCount = 0;
  let result = "";

  for (let letter of s) {
    if (letter === "(") {
      if (parenthesisCount) {
        result += letter;
      }
      parenthesisCount++;
    } else {
      parenthesisCount--;
      if (parenthesisCount) {
        result += letter;
      }
    }
  }
};
