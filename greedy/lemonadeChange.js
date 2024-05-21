function Lemonade(bills) {
  let total = 0;

  bills.forEach((a) => a / 5);

  for (let i = 0; i < bills.length; i++) {
    total++;
    bills[i]--;
    console.log(total, bills[i]);
    if (bills[i] > 0) {
      if (total < bills[i]) {
        console.log("kaha pr", i, total);
        return false;
      }
      total -= bills[i];
      console.log("iske badd", total);
    }
  }

  return true;
}

console.log(Lemonade([5, 5, 10, 10, 20]));
