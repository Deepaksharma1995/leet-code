function Node(val) {
  this.data = val;
  this.left = null;
  this.right = null;
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let node = new Node(val);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (root.val > node.val) {
      if (root.left === null) root.left = node;
      else this.insertNode(root.left, node);
    } else {
      if (root.right === null) root.right = node;
      else this.insertNode(root.right, node);
    }
  }
  inorderTraversal(node, arr) {
    if (node === null) return;
    this.inorderTraversal(node.left);
    arr.push(node);
    this.inorderTraversal(node.right);
  }
  preOrderTraversal(node, arr) {
    if (node === null) return;
    arr.push(right);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }
  postOrderTraversal(node, arr) {
    if (node === null) return;
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    arr.push(right);
  }
  levelTraversal(root) {
    if (root === null || root.length === 0) return [];
    let soln = [];

    function level(rootArr) {
      if (rootArr.length === 0) return;
      let queue = [];
      let vals = [];

      rootArr.forEach((data) => {
        if (data?.val) vals.push(data.val);
        data?.left && queue.push(data?.left);
        data?.right && queue.push(data?.right);
      });

      vals.length && soln.push(vals);
      return level(queue);
    }

    level([root]);
    return soln;
  }
  distanceK(root, target, k) {
    let ans = [];
    if (root === null) return ans;
    root.parent = null;
    let queue = [root];

    while (queue.length > 0) {
      let size = queue.length;

      for (let i = 0; i < size; i++) {
        let node = queue[0];
        queue.shift();
        if (node.val === target) target = node; //get the actual Node

        if (node.left) {
          node.left.parent = node;
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
          node.right.parent = node;
        }
      }
    }

    function bfs(target, ans, distanceK) {
      if (target === null) return;
      if (distanceK > k) return;
      if (distanceK === k) {
        console.log(target.val);
        ans.push(target.val);
        return ans;
      }
      if (target.left) {
        bfs(target.left, ans, distanceK + 1);
      }
      if (target.right) {
        bfs(target.right, ans, distanceK + 1);
      }
      if (target.parent) {
        bfs(target.left, ans, distanceK + 1);
      }

      return ans;
    }

    console.log(target.parent.val);
    bfs(target, ans, 0);
    return ans;
  }
}

let tree = new BinaryTree();
tree.insert(3);
tree.insert(1);
tree.insert(5);
tree.insert(6);
console.log(tree);
