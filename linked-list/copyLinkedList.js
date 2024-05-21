function copyRandomList(head) {
  let newToOld = new Map();

  let curr = head;

  while (curr) {
    newToOld.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    newToOld.get(curr).next = newToOld.get(curr.next);
    newToOld.get(curr).random = newToOld.get(current.random);
    curr = curr.next;
  }

  return newToOld.get(head);
}
