function maxDepth(s) {
  let currentMax = 0;
  let highest = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      currentMax++;
      if (currentMax > highest) highest = currentMax;
    } else if (s[i] === ")") currentMax--;
  }

  return highest;
}
