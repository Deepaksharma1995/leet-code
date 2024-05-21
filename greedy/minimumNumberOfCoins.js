function MinimumNumberOfcoins(target) {
  let coins = [1000, 500, 100, 50, 20, 10, 5, 2, 1];

  let total = 0;

  for (let i = 0; i < coins.length; i++) {
    if (parseInt(target / coins[i]) >= 1) {
      total += parseInt(target / coins[i]);
      target = target % coins[i];
    } else {
      continue;
    }
  }
  console.log(total);
  return total;
}

MinimumNumberOfcoins(121);
