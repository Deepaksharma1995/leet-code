function romanToInt(s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let soln = 0;
  let i = 0;
  while (i < s.length) {
    if (roman[s[i]] > roman[s[i + 1]]) {
      soln = soln + roman[s[i]];
      i++;
    } else if (roman[s[i]] < roman[s[i + 1]]) {
      soln += roman[s[i + 1]] - roman[s[i]];
      i += 2;
    } else {
      soln += roman[s[i]];
      i++;
    }
  }
  return soln;
}

romanToInt("III");
