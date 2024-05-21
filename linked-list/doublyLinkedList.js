class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function addNode(data, head) {
  let temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }

  let node = new Node(data);
  temp.next = node;
  node.prev = temp;
}

function deleteNode(data, head) {
  let temp = head;
  while (temp.next.data != data) {
    temp = temp.next;
  }
  let curNode = temp;
  curNode.next = temp.next.next;
  temp.next.next.prev = curNode;
}

function reverseDoublyLinkedList(head) {
  if (head === null || head.next === null) return head;
  let prev = null;

  let current = head;

  while (current !== null) {
    prev = current.prev;
    current.prev = current.next;
    current.next = prev;

    current = current.prev;
  }
}

let head = { data: 1, next: null };

addNode(2, head);
addNode(3, head);
addNode(4, head);
addNode(5, head);
addNode(6, head);
addNode(7, head);
console.log(head);
