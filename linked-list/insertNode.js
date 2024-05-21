function Node(data) {
  this.data = data;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addNode(data) {
    let tempNode = new Node(data);

    tempNode.next = this.head;
    this.head = tempNode;
  }
  lengthOfList() {
    let temp = this.head;
    let count = 1;
    while (temp.next !== null) {
      temp = temp.next;
      count++;
    }
    return count;
  }
}

const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);

console.log(list.head, list.lengthOfList());
