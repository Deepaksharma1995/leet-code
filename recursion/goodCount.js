var countGoodNumbers = function (n) {
  if (n === 0) return;
  let count5 = 1;
  let count4 = 0;
  let m = 10 ** 9 + 7;
  if (n % 2 === 0) {
    count5 = parseInt(n / 2);
  } else {
    count5 = parseInt(n / 2) + 1;
  }
  count4 = n - count5;

  let i = 1;

  for (let f = 1; f <= count5; f++) {
    i = (i * 5) % m;
  }

  console.log(i);

  let c = 1;
  for (let f = 1; f <= count4; f++) {
    c = (c * 4) % m;
  }

  console.log(c);
  console.log((i * c) % m);

  return i;
};

countGoodNumbers(50);
