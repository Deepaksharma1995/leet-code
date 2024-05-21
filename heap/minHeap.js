class minHeap {
  constructor() {
    this.minHeap = [];
  }
  insert(value) {
    this.minHeap.push(value);
    this.bubbleUp();
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return 2 * index + 1;
  }
  rightChildIndex(index) {
    return 2 * index + 2;
  }
  bubbleUp() {
    let currentIndex = this.minHeap.length - 1;
    while (
      currentIndex > 0 &&
      this.minHeap[this.parentIndex(currentIndex)] > this.minHeap[currentIndex]
    ) {
      this.swap(this.parentIndex(currentIndex), currentIndex);
      currentIndex = this.parentIndex(currentIndex);
    }
  }
  extract() {
    if (this.minHeap.length === 0) return null;
    if (this.minHeap.length === 1) return this.minHeap.pop();

    const top = this.minHeap[0];
    this.minHeap[0] = this.minHeap.pop();
    this.heapifyMin();
    return top;
  }
  heapifyMin() {
    let currentIndex = 0;
    let nextIndex = null;

    while (nextIndex !== currentIndex) {
      currentIndex = nextIndex !== null ? nextIndex : currentIndex;

      let left = this.leftChildIndex(currentIndex);
      let right = this.rightChildIndex(currentIndex);
      nextIndex = currentIndex;

      if (
        left < this.minHeap.length &&
        this.minHeap[left] < this.minHeap[nextIndex]
      ) {
        nextIndex = left;
      }

      if (
        right < this.minHeap.length &&
        this.minHeap[right] < this.minHeap[nextIndex]
      ) {
        nextIndex = right;
      }

      if (nextIndex !== currentIndex) {
        this.swap(nextIndex, currentIndex);
      }
    }
  }
  swap(i, j) {
    [this.minHeap[i], this.minHeap[j]] = [this.minHeap[j], this.minHeap[i]];
  }
}
