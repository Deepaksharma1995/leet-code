class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Get the parent index of a node
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

  // Swap two elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert a new element into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Heapify up (used after insertion)
  heapifyUp() {
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

  // Extract the maximum element (root) from the heap
  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  // Heapify down (used after extraction)
  heapifyDown() {
    let currentIndex = 0;
    let nextIndex = null;

    while (nextIndex !== currentIndex) {
      currentIndex = nextIndex !== null ? nextIndex : currentIndex;

      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      nextIndex = currentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[nextIndex]
      ) {
        nextIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[nextIndex]
      ) {
        nextIndex = rightChildIndex;
      }

      if (nextIndex !== currentIndex) {
        this.swap(currentIndex, nextIndex);
      }
    }
  }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(8);
maxHeap.insert(15);

console.log(maxHeap.heap); // Output: [20, 15, 10, 5, 8]

console.log(maxHeap.extractMax()); // Output: 20
console.log(maxHeap.heap); // Output: [15, 8, 10, 5]
