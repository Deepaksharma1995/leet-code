var minEatingSpeed = function (piles, h) {
  let low = 1,
    high = Math.max(...piles);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let totalH = calculateHours(piles, mid);
    if (totalH <= h) high = mid - 1;
    else low = mid + 1;
  }

  return low;
};

function calculateHours(piles, hourly) {
  let high = piles.length,
    totalH = 0;

  for (let i = 0; i < high; i++) {
    totalH += Math.ceil(piles[i] / hourly);
  }

  return totalH;
}
