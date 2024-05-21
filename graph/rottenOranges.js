function orangesRotting(M) {
  //let vis = new Set();
  let rotten = [];
  let fresh = 0;
  let min = -1;

  //to get the all rottens
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] === 2) rotten.push([i, j]);
      if (M[i][j] === 1) fresh++;
    }
  }
  if (fresh === 0) return 0;

  while (rotten.length > 0) {
    let x = rotten.length;
    for (let i = 0; i < x; i++) {
      let [left, right] = rotten.shift();
      if (left + 1 < M.length && M[left + 1][right] === 1) {
        M[left + 1][right] = 2;
        rotten.push([left + 1, right]);
      }
      if (left - 1 >= 0 && M[left - 1][right] === 1) {
        M[left - 1][right] = 2;
        rotten.push([left - 1, right]);
      }
      if (right + 1 < M[0].length && M[left][right + 1] === 1) {
        M[left][right + 1] = 2;
        rotten.push([left, right + 1]);
      }
      if (right - 1 >= 0 && M[left][right - 1] === 1) {
        M[left][right - 1] = 2;
        rotten.push([left, right - 1]);
      }
    }
    min++;
  }

  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] === 1) {
        return -1;
      }
    }
  }

  return min;
}

const x = orangesRotting([[0, 2]]);

console.log(x);
