var findContentChildren = function (g, s) {
  if (g.length === 0) return;
  let count = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  console.log(g, s);

  let i = 0;
  let j = 0;
  while (j < s.length) {
    console.log(g[i], s[j], g[i] <= s[i]);
    if (g[i] <= s[j]) {
      count++;
      i++;
      j++;
    } else {
      j++;
    }
  }
  console.log(count);
  return count;
};

findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]);
