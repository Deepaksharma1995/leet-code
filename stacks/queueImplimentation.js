class Queue {
  constructor() {
    this.queue = [];
  }
  push(data) {
    this.queue.push(data);
  }
  pop() {
    return this.queue.shift();
  }
  top() {
    return this.queue[0];
  }
  size() {
    return this.queue.length;
  }
}
