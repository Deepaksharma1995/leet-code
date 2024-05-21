let MajorityElements = (a) => {
  let solution = 0,
    cnt = 0;
  for (let i = 0; i < a.length; i++) {
    if (cnt === 0) {
      solution = a[i];
      cnt = 1;
    } else if (solution === a[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }
  return solution;
};
