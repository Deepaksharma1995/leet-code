function setZero(matrix) {
  let storeI = {};
  let storeJ = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        storeI[i] = i;
        storeJ[j] = j;
      }
    }
  }

  console.log(storeI, storeJ);
}

setZero([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
