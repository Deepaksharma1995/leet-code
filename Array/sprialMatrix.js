function printSpral(matrix) {
  let n = matrix.length; //rows
  let m = matrix[0].length; //colums
  let result = [];

  //right -> bottom -> left -> top
  let left = 0,
    right = m - 1,
    top = 0,
    bottom = n - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
}
