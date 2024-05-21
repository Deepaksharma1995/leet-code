function loopInList(head) {
  if (head === null || head.next === null) return false;
  if (head.next === head) return true;

  let slow = head;
  let fast = head;

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }

  return false;
}
