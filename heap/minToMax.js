class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Get the left child index of a node
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Get the right child index of a node
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (
      currentIndex > 0 &&
      this.heap[currentIndex] > this.heap[this.getParentIndex(currentIndex)]
    ) {
      const parentIndex = this.getParentIndex(currentIndex);
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

const arr = [1, 2, 3, 4, 5];
const maxHeapArr = new MaxHeap();
for (let i = 0; i < arr.length; i++) {
  maxHeapArr.insert(arr[i]);
}

console.log(maxHeapArr);
