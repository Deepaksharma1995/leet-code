class Stack {
  constructor() {
    this.queue = [];
  }

  push(x) {
    this.queue.push(x);

    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }

  pop() {
    return this.queue.shift();
  }
}
