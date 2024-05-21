function generateParanthesis(n) {
  const res = [];

  function recur(s, l, r) {
    if (s.length === 2 * n) {
      res.push(s);
      return;
    }

    if (l < n) recur(s + "(", l + 1, r);
    if (r < n) recur(s + ")", l, r + 1);
  }

  recur("", 0, 0);

  return res;
}
