function widthOfBinaryTree(root) {
  // If the root is null,
  // the width is zero
  if (!root) {
    return 0;
  }

  // Initialize a variable 'ans'
  // to store the maximum width
  let ans = 0;

  // Create a queue to perform level-order
  // traversal, where each element is a pair
  // of TreeNode and its position in the level
  let q = [{ node: root, position: 0 }];

  // Perform level-order traversal
  while (q.length > 0) {
    // Get the number of
    // nodes at the current level
    let size = q.length;
    // Get the position of the front
    // node in the current level
    let mmin = q[0].position;

    // Store the first and last positions
    // of nodes in the current level
    let first, last;

    // Process each node
    // in the current level
    for (let i = 0; i < size; i++) {
      // Calculate current position relative
      // to the minimum position in the level
      let cur_id = q[0].position - mmin;
      // Get the current node
      let node = q[0].node;
      // Dequeue the front node from the queue
      q.shift();

      // If this is the first node in the level,
      // update the 'first' variable
      if (i === 0) {
        first = cur_id;
      }

      // If this is the last node in the level,
      // update the 'last' variable
      if (i === size - 1) {
        last = cur_id;
      }

      // Enqueue the left child of the
      // current node with its position
      if (node.left) {
        q.push({ node: node.left, position: cur_id * 2 + 1 });
      }

      // Enqueue the right child of the
      // current node with its position
      if (node.right) {
        q.push({ node: node.right, position: cur_id * 2 + 2 });
      }
    }

    // Update the maximum width by calculating
    // the difference between the first and last
    // positions, and adding 1
    ans = Math.max(ans, last - first + 1);
  }

  // Return the maximum
  // width of the binary tree
  return ans;
}
