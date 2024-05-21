function longestCommonPrefix(strs) {
  let result = "";
  let n = strs.length;
  let isBreak = false;

  for (let i = 0; i < strs[0].length; i++) {
    let aux = strs[0][i];

    for (let j = 0; j < n; j++) {
      if (strs[j]?.[i] == undefined || strs[j][i] !== aux) {
        isBreak = true;
        break;
      }
    }
    if (!isBreak) {
      result += aux;
    } else return result;
  }

  return result;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

x.reduce()