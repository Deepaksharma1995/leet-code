function oddEvenList(head) {
  if (!head || head.next === null) return head;
  let odd = head;
  let even = head.next;
  let evenHead = head.next;

  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
}
