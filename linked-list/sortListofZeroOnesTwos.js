//1-1-1-1-0-0-0-1-2-2-1-0-1-2

function SortList(head) {
  if (!head && !head.next) return head;

  let zeroHead = new ListNode(-1);
  let oneHead = new ListNode(-1);
  let twoHead = new ListNode(-1);
  let zero = zeroHead,
    one = oneHead,
    two = twoHead;

  let temp = head;
  while (temp !== null) {
    if (temp.val === 0) {
      zero.next = temp;
      zero = temp;
    } else if (temp.val === 1) {
      one.next = temp;
      one = temp;
    } else if (temp.val === 2) {
      two.next = temp;
      two = temp;
    }
    temp = temp.next;
  }

  zero.next = oneHead.next ? oneHead.next : twoHead.next;
  oneHead.next = twoHead.next;

  return zeroHead.next;
}
