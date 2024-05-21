function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;
  
    const dfs = (row, col, index) => {
      // Check if the current position is out of bounds or if the current character doesn't match.
      if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index]) {
        return false;
      }
  
      // Check if we have found the entire word.
      if (index === word.length - 1) {
        return true;
      }
  
      // Mark the current cell as visited.
      const temp = board[row][col];
      board[row][col] = '*';
  
      // Explore the neighboring cells in a depth-first manner.
      const found =
        dfs(row + 1, col, index + 1) ||
        dfs(row - 1, col, index + 1) ||
        dfs(row, col + 1, index + 1) ||
        dfs(row, col - 1, index + 1);
  
      // Restore the original value of the cell before backtracking.
      board[row][col] = temp;
  
      return found;
    };
  
    // Iterate through each cell in the grid and start the search.
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (dfs(i, j, 0)) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  // Example usage:
  const board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ];
  
  const word1 = "ABCCED"; // Output: true
  const word2 = "SEE";    // Output: true
  const word3 = "ABCB";   // Output: false
  
  console.log(exist(board, word1));
  console.log(exist(board, word2));
  console.log(exist(board, word3));
  