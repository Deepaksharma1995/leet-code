function minStations(n, s, e) {
  s.sort((a, b) => a - b);
  e.sort((a, b) => a - b);

  let answer = 1;
  let count = 1;
  let i = 1,
    j = 0;

  while (i < n && j < n) {
    if (s[i] <= dep[j]) {
      count++;
      i++;
    } else {
      count--;
      j++;
    }
    answer = Math.max(answer, count);
  }

  return answer;
}
