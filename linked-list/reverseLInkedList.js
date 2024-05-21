function reverseList(head) {
  if (head === null || head.next === null) return head;
  let prev = head;
  let curr = head.next;

  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}
