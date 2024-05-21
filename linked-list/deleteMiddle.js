function deleteMiddle(head) {
  let temp = new ListNode();
  temp.next = head;
  let slow = temp;
  let fast = temp;

  while (fast && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = slow.next.next;

  return head;
}
