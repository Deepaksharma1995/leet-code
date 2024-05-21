function candy(ratings) {
  let aux = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) aux[i] = aux[i - 1] + 1;
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) aux[i] = Math.max(aux[i], aux[i + 1] + 1);
  }

  return aux.reduce((acc, curr) => acc + curr, 0);
}
