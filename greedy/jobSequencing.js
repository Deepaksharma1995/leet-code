function jobScheduling(arr, n) {
  arr.sort((a, b) => b.profit - a.profit);
  console.log(arr);

  let count = 1;
  let profit = arr[0].profit;

  for (let i = 1; i < n; i++) {
    if (arr[i].dead <= count) {
      continue;
    } else {
      profit += arr[i].profit;
      count++;
    }
  }
  console.log(count, profit);
  return `${count} ${profit}`;
}

jobScheduling(
  [
    { id: 2, dead: 2, profit: 435 },
    { id: 14, dead: 5, profit: 424 },
    { id: 3, dead: 10, profit: 401 },
    { id: 15, dead: 8, profit: 397 },
    { id: 16, dead: 5, profit: 375 },
    { id: 13, dead: 4, profit: 370 },
    { id: 4, dead: 16, profit: 368 },
    { id: 6, dead: 1, profit: 361 },
    { id: 1, dead: 3, profit: 288 },
    { id: 9, dead: 5, profit: 251 },
    { id: 5, dead: 16, profit: 248 },
    { id: 17, dead: 5, profit: 218 },
    { id: 12, dead: 6, profit: 184 },
    { id: 10, dead: 3, profit: 170 },
    { id: 8, dead: 10, profit: 167 },
    { id: 11, dead: 14, profit: 156 },
    { id: 7, dead: 11, profit: 108 },
  ],
  17
);
