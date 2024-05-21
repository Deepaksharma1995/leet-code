var maxScore = function (cardPoints, k) {
  let total = 0;
  for (let i = 0; i < k; i++) total += cardPoints[i];

  let best = total;

  let i = k - 1,
    j = cardPoints.length - 1;

  while (i >= 0) {
    total += cardPoints[j] - cardPoints[i];
    best = Math.max(best, total);
    i--;
    j--;
  }

  return best;
};

console.log(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3));
