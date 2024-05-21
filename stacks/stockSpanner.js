var StockSpanner = function () {
  this.stock = [];
};

StockSpanner.prototype.next = function (price) {
  this.stock.push(price);
  const stack = [];
  const n = this.stock.length;
  const result = new Array(n).fill(-1);

  for (let i = 0; i <= n; i++) {
    while (
      stack.length !== 0 &&
      (i === n || this.stock[stack[stack.length - 1]] < this.stock[i])
    ) {
      stack.pop();
    }
    if (stack.length !== 0) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }

  return n - 1 - result[n - 1];
};

const obj = new StockSpanner();
// obj.next(100);
// obj.next(80);
// obj.next(60);
// obj.next(70);
// obj.next(60);
// obj.next(75);
// obj.next(85);
console.log(
  obj.next(29),
  obj.next(91),
  obj.next(62),
  obj.next(76),
  obj.next(51)
);
// obj.next(35);
// obj.next(45);
// obj.next(55);
// obj.next(65);
// obj.next(75);
