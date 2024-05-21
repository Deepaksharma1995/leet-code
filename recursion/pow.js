var myPow = function (x, n) {
  if (n < 0) return 1 / myPowPos(x, +n);
  else return myPowPos(x, n);
};

var myPowPos = function (x, n) {
  if (n <= 1) return x;
  else return x * myPow(x, n - 1);
};

function power(x, y, m) {
  let res = 1;
  x = x;

  if (x === 0) return 0;

  while (y > 0) {
    if (y % 2 !== 0) res = res * x;

    y = Math.floor(y / 2);
    x = x * x;
  }
  console.log(res);
  return res;
}

power(5, 25);
