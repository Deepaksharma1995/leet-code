function rotateImage(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length / 2; j++) {
      [matrix[i][j], matrix[i][matrix.length - 1 - j]] = [
        matrix[i][matrix.length - 1 - j],
        matrix[i][j],
      ];
    }
  }
}
