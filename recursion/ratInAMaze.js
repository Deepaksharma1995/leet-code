function findAllPath(n, m) {
  const result = [];
  const path = [];

  function recur(row, col) {
    if (row === n - 1 && col === m[0].length - 1) {
      result.push([...path]);
    }

    if (
      row < 0 ||
      row >= n ||
      col < 0 ||
      col >= m[0].length ||
      !m[row] ||
      m[row][col] === 0 ||
      m[row][col] === "*"
    )
      return;

    const temp = m[row][col];
    m[row][col] = "*";

    path.push("D");
    recur(row + 1, col, "D");
    path.pop();

    path.push("R");
    recur(row, col + 1, "R");
    path.pop();

    path.push("U");
    recur(row - 1, col, "U");
    path.pop();

    path.push("L");
    recur(row, col - 1, "L");
    path.pop();

    m[row][col] = temp;
  }

  recur(0, 0);

  console.log(result);

  return result;
}

findAllPath(4, [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
]);
